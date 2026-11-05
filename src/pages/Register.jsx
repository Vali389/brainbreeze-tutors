import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Star, 
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  UserCheck,
  Home,
  Globe,
  MessageCircle
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BrainBreezeRegistration = () => {
  const [formType, setFormType] = useState('parent');
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success');
  const [ fieldErrors, setFieldErrors] = useState({});

  const [parentData, setParentData] = useState({
    parentName: '',
    email: '',
    phone: '',
    address: '',
    childName: '',
    childAge: '',
    childClass: '',
    subjects: [],
    curriculum: '',
    learningMode: '',
    preferredTime: '',
    additionalInfo: ''
  });

  const [teacherData, setTeacherData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    experience: '',
    subjects: [],
    curriculum: [],
    teachingMode: '',
    availability: '',
    expectedSalary: '',
    additionalInfo: '',
    preferredLocation: ''
  });

  const subjects = [
    'Mathematics', 'Science', 'English', 'Social Studies', 'Hindi', 
    'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Economics', 'Telugu'
  ];

  const curriculums = ['IB', 'Cambridge', 'ICSE', 'IGCSE', 'CBSE', 'SSC'];

  const parentSteps = [
    { title: 'Parent Details', icon: User },
    { title: 'Child Information', icon: GraduationCap },
    { title: 'Learning Preferences', icon: BookOpen },
    { title: 'Review & Submit', icon: CheckCircle }
  ];

  const teacherSteps = [
    { title: 'Personal Details', icon: User },
    { title: 'Qualifications', icon: GraduationCap },
    { title: 'Teaching Preferences', icon: BookOpen },
    { title: 'Review & Submit', icon: CheckCircle }
  ];

  const showToastMessage = (message, type = 'success') => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  const validateField = (field, value, formType) => {
    const errors = { ...fieldErrors };
    
    switch (field) {
      case 'email':
        if (!value) {
          errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          errors.email = 'Please enter a valid email address';
        } else {
          delete errors.email;
        }
        break;
      case 'phone':
        if (!value) {
          errors.phone = 'Phone number is required';
        } else if (!/^\+?\d{10,15}$/.test(value)) {
          errors.phone = 'Please enter a valid phone number';
        } else {
          delete errors.phone;
        }
        break;
      case 'parentName':
      case 'fullName':
        if (!value) {
          errors[field] = 'Name is required';
        } else if (value.length < 3) {
          errors[field] = 'Name must be at least 3 characters';
        } else {
          delete errors[field];
        }
        break;
      case 'childName':
        if (formType === 'parent' && !value) {
          errors.childName = 'Child name is required';
        } else {
          delete errors.childName;
        }
        break;
      case 'childAge':
        if (formType === 'parent' && !value) {
          errors.childAge = 'Child age is required';
        } else if (formType === 'parent' && value && (parseInt(value) < 4 || parseInt(value) > 18)) {
          errors.childAge = 'Child age must be between 4 and 18';
        } else {
          delete errors.childAge;
        }
        break;
      case 'childClass':
        if (formType === 'parent' && !value) {
          errors.childClass = 'Child class is required';
        } else {
          delete errors.childClass;
        }
        break;
      case 'qualification':
        if (formType === 'teacher' && !value) {
          errors.qualification = 'Qualification is required';
        } else {
          delete errors.qualification;
        }
        break;
      case 'experience':
        if (formType === 'teacher' && !value) {
          errors.experience = 'Experience is required';
        } else {
          delete errors.experience;
        }
        break;
      case 'preferredLocation':
        if (formType === 'teacher' && !value) {
          errors.preferredLocation = 'Preferred location is required';
        } else {
          delete errors.preferredLocation;
        }
        break;
      default:
        break;
    }
    
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleParentInputChange = (field, value) => {
    setParentData(prev => ({ ...prev, [field]: value }));
    validateField(field, value, 'parent');
  };

  const handleTeacherInputChange = (field, value) => {
    setTeacherData(prev => ({ ...prev, [field]: value }));
    validateField(field, value, 'teacher');
  };

  const handleSubjectToggle = (subject) => {
    const currentData = formType === 'parent' ? parentData : teacherData;
    const updateFunction = formType === 'parent' ? handleParentInputChange : handleTeacherInputChange;
    
    const updatedSubjects = currentData.subjects.includes(subject)
      ? currentData.subjects.filter(s => s !== subject)
      : [...currentData.subjects, subject];
    
    updateFunction('subjects', updatedSubjects);
  };

  const handleCurriculumToggle = (curriculum) => {
    if (formType === 'parent') {
      handleParentInputChange('curriculum', curriculum);
    } else {
      const updatedCurriculums = teacherData.curriculum.includes(curriculum)
        ? teacherData.curriculum.filter(c => c !== curriculum)
        : [...teacherData.curriculum, curriculum];
      handleTeacherInputChange('curriculum', updatedCurriculums);
    }
  };

  const validateStep = () => {
    const currentData = formType === 'parent' ? parentData : teacherData;
    
    if (currentStep === 0) {
      const requiredFields = formType === 'parent' 
        ? ['parentName', 'email', 'phone'] 
        : ['fullName', 'email', 'phone'];
      
      let isValid = true;
      requiredFields.forEach(field => {
        if (!validateField(field, currentData[field], formType)) {
          isValid = false;
        }
      });
      
      if (!isValid) {
        showToastMessage('Please fill all required fields correctly', 'error');
        return false;
      }
    }
    
    if (currentStep === 1 && formType === 'parent') {
      const requiredFields = ['childName', 'childAge', 'childClass'];
      let isValid = true;
      requiredFields.forEach(field => {
        if (!validateField(field, currentData[field], formType)) {
          isValid = false;
        }
      });
      
      if (!isValid) {
        showToastMessage('Please fill all child information correctly', 'error');
        return false;
      }
    }
    
    if (currentStep === 1 && formType === 'teacher') {
      const requiredFields = ['qualification', 'experience'];
      let isValid = true;
      requiredFields.forEach(field => {
        if (!validateField(field, currentData[field], formType)) {
          isValid = false;
        }
      });
      
      if (!isValid) {
        showToastMessage('Please fill all qualification details correctly', 'error');
        return false;
      }
    }
    
    if (currentStep === 2) {
      if (currentData.subjects.length === 0) {
        showToastMessage('Please select at least one subject', 'error');
        return false;
      }
      if (formType === 'parent' && !parentData.curriculum) {
        showToastMessage('Please select a curriculum', 'error');
        return false;
      }
      if (formType === 'teacher' && teacherData.curriculum.length === 0) {
        showToastMessage('Please select at least one curriculum', 'error');
        return false;
      }
      if (formType === 'parent' && !parentData.learningMode) {
        showToastMessage('Please select a learning mode', 'error');
        return false;
      }
      if (formType === 'teacher' && !teacherData.teachingMode) {
        showToastMessage('Please select a teaching mode', 'error');
        return false;
      }
    }
    
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const clearForm = () => {
    setParentData({
      parentName: '', email: '', phone: '', address: '', childName: '', childAge: '', 
      childClass: '', subjects: [], curriculum: '', learningMode: '', preferredTime: '', 
      additionalInfo: ''
    });
    setTeacherData({
      fullName: '', email: '', phone: '', address: '', qualification: '', experience: '', 
      subjects: [], curriculum: [], teachingMode: '', availability: '', expectedSalary: '', 
      additionalInfo: '', preferredLocation: ''
    });
    setFieldErrors({});
    setCurrentStep(0);
  };

  // Updated handleSubmit function with better error handling and debugging
const handleSubmit = async () => {
  if (!validateStep()) return;

  setIsSubmitting(true);
  
  try {
    // Initialize EmailJS with your public key
    emailjs.init('sRPQzMLHSR5kV7F2L'); // Your public key
    
    const templateParams = formType === 'parent' ? {
      // Make sure these parameter names match your EmailJS template exactly
      form_type: 'Parent Registration',
      parent_name: parentData.parentName,
      email: parentData.email,
      phone: parentData.phone,
      address: parentData.address || 'Not provided',
      child_name: parentData.childName,
      child_age: parentData.childAge,
      child_class: parentData.childClass,
      subjects: parentData.subjects.join(', ') || 'None selected',
      curriculum: parentData.curriculum || 'Not selected',
      learning_mode: parentData.learningMode || 'Not selected',
      preferred_time: parentData.preferredTime || 'Not specified',
      additional_info: parentData.additionalInfo || 'None provided',
      to_email: 'brainbreezetutors@gmail.com', // Add recipient email
      reply_to: parentData.email // Add reply-to field
    } : {
      form_type: 'Teacher Registration',
      full_name: teacherData.fullName,
      email: teacherData.email,
      phone: teacherData.phone,
      address: teacherData.address || 'Not provided',
      qualification: teacherData.qualification,
      experience: teacherData.experience,
      subjects: teacherData.subjects.join(', ') || 'None selected',
      curriculum: teacherData.curriculum.join(', ') || 'None selected',
      teaching_mode: teacherData.teachingMode || 'Not selected',
      availability: teacherData.availability || 'Not specified',
      expected_salary: teacherData.expectedSalary || 'Not specified',
      additional_info: teacherData.additionalInfo || 'None provided',
      preferred_location: teacherData.preferredLocation || 'Not specified',
      to_email: 'meeravalisk89@gmail.com', // Add recipient email
      reply_to: teacherData.email // Add reply-to field
    };

    console.log('Sending email with params:', templateParams); // Debug log

    // Send email using EmailJS
    const result = await emailjs.send(
      'service_z85kawl', //  service ID
      formType === 'parent' ? 'template_fqmnq0i' : 'template_2shln9r', // Template IDs
      templateParams,
      '9UAb8ufVRiV1o_SDv' //  public key 
    );

    console.log('EmailJS response:', result); // Debug log

    if (result.status === 200) {
      console.log('Email sent successfully!');
      
      // Optional: Send WhatsApp notification
      const whatsappMessage = formType === 'parent'
        ? `New Parent Registration: ${parentData.parentName}, Child: ${parentData.childName}, Email: ${parentData.email}`
        : `New Teacher Registration: ${teacherData.fullName}, Email: ${teacherData.email}`;
      
      // You can uncomment this line if you want to open WhatsApp
      // window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`);

      setShowSuccess(true);
      showToastMessage('Registration submitted successfully! We will contact you shortly.', 'success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setShowSuccess(false);
        clearForm();
      }, 3000);
    } else {
      throw new Error('Email send failed with status: ' + result.status);
    }
    
  } catch (error) {
    console.error('Submission failed:', error);
    
    // More detailed error handling
    let errorMessage = 'Submission failed. Please try again.';
    
    if (error.text) {
      console.error('EmailJS error details:', error.text);
      errorMessage = `Email send failed: ${error.text}`;
    } else if (error.message) {
      console.error('Error message:', error.message);
      errorMessage = `Error: ${error.message}`;
    }
    
    showToastMessage(errorMessage, 'error');
  } finally {
    setIsSubmitting(false);
  }
};

// Alternative method using emailjs.sendForm if you prefer form-based sending
const handleSubmitWithForm = async () => {
  if (!validateStep()) return;

  setIsSubmitting(true);
  
  try {
    // Create a temporary form element
    const form = document.createElement('form');
    const currentData = formType === 'parent' ? parentData : teacherData;
    
    // Add form fields
    Object.entries(currentData).forEach(([key, value]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = Array.isArray(value) ? value.join(', ') : value || '';
      form.appendChild(input);
    });
    
    // Add form type
    const formTypeInput = document.createElement('input');
    formTypeInput.type = 'hidden';
    formTypeInput.name = 'form_type';
    formTypeInput.value = formType === 'parent' ? 'Parent Registration' : 'Teacher Registration';
    form.appendChild(formTypeInput);
    
    document.body.appendChild(form);
    
    const result = await emailjs.sendForm(
      'service_y2dc0e9',
      formType === 'parent' ? 'template_fg6icss' : 'template_rhpjuvc',
      form,
      'sRPQzMLHSR5kV7F2L'
    );
    
    document.body.removeChild(form);
    
    console.log('Email sent successfully:', result);
    setShowSuccess(true);
    showToastMessage('Registration submitted successfully!', 'success');
    
    setTimeout(() => {
      setShowSuccess(false);
      clearForm();
    }, 3000);
    
  } catch (error) {
    console.error('Form submission failed:', error);
    showToastMessage('Submission failed. Please try again.', 'error');
  } finally {
    setIsSubmitting(false);
  }
};

  const currentSteps = formType === 'parent' ? parentSteps : teacherSteps;
  const currentData = formType === 'parent' ? parentData : teacherData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-100 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} style={{ zIndex: 9999 }} />

      <motion.div 
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800">
            Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Brain Breeze Tutors</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you're a parent seeking a tutor or a teacher looking to inspire, start your journey here.
          </p>
        </div>

        {/* Toast Notification */}
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: -100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -100, scale: 0.8 }}
              className={`fixed top-4 right-4 z-50 flex items-center gap-2 px-6 py-4 rounded-xl shadow-lg text-white font-medium ${
                toastType === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {toastType === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
              {toastMessage}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Brain Breeze Tutors
              </h1>
              <p className="text-xl text-gray-600 font-medium">
                Get clarity, Achieve Easy Learning
              </p>
            </motion.div>
          </motion.div>

          {/* Form Type Selection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    setFormType('parent');
                    setCurrentStep(0);
                    setFieldErrors({});
                  }}
                  variant={formType === 'parent' ? 'contained' : 'outlined'}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '1rem',
                    textTransform: 'none',
                    fontWeight: '600',
                    background: formType === 'parent' ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' : 'none',
                    color: formType === 'parent' ? '#fff' : '#666',
                    borderColor: '#d1d5db',
                    '&:hover': {
                      background: formType === 'parent' ? 'linear-gradient(to right, #2563eb, #7c3aed)' : '#f3f4f6',
                    },
                  }}
                  startIcon={<User size={20} />}
                >
                  For Parents
                </Button>
                <Button
                  onClick={() => {
                    setFormType('teacher');
                    setCurrentStep(0);
                    setFieldErrors({});
                  }}
                  variant={formType === 'teacher' ? 'contained' : 'outlined'}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '1rem',
                    textTransform: 'none',
                    fontWeight: '600',
                    background: formType === 'teacher' ? 'linear-gradient(to right, #3b82f6, #8b5cf6)' : 'none',
                    color: formType === 'teacher' ? '#fff' : '#666',
                    borderColor: '#d1d5db',
                    '&:hover': {
                      background: formType === 'teacher' ? 'linear-gradient(to right, #2563eb, #7c3aed)' : '#f3f4f6',
                    },
                  }}
                  startIcon={<GraduationCap size={20} />}
                >
                  For Teachers
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <div className="flex justify-center">
              <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-lg">
                {currentSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`flex items-center gap-2 ${index <= currentStep ? 'text-blue-600' : 'text-gray-400'}`}>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        index <= currentStep ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-200'
                      }`}>
                        <step.icon size={20} />
                      </div>
                      <span className="font-medium hidden sm:block">{step.title}</span>
                    </div>
                    {index < currentSteps.length - 1 && (
                      <div className={`w-8 h-1 mx-4 rounded transition-all duration-300 ${
                        index < currentStep ? 'bg-blue-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Step 0: Basic Information */}
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {formType === 'parent' ? 'Parent Information' : 'Personal Details'}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {formType === 'parent' ? 'Parent Name' : 'Full Name'} *
                    </label>
                    <input
                      type="text"
                      value={formType === 'parent' ? parentData.parentName : teacherData.fullName}
                      onChange={(e) => {
                        const field = formType === 'parent' ? 'parentName' : 'fullName';
                        const updateFunction = formType === 'parent' ? handleParentInputChange : handleTeacherInputChange;
                        updateFunction(field, e.target.value);
                      }}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        fieldErrors[formType === 'parent' ? 'parentName' : 'fullName'] 
                          ? 'border-red-500 focus:ring-red-500' 
                          : 'border-gray-300'
                      }`}
                      placeholder={formType === 'parent' ? 'Enter parent name' : 'Enter full name'}
                    />
                    {fieldErrors[formType === 'parent' ? 'parentName' : 'fullName'] && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {fieldErrors[formType === 'parent' ? 'parentName' : 'fullName']}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={currentData.email}
                      onChange={(e) => {
                        const updateFunction = formType === 'parent' ? handleParentInputChange : handleTeacherInputChange;
                        updateFunction('email', e.target.value);
                      }}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        fieldErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter email address"
                    />
                    {fieldErrors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={currentData.phone}
                      onChange={(e) => {
                        const updateFunction = formType === 'parent' ? handleParentInputChange : handleTeacherInputChange;
                        updateFunction('phone', e.target.value);
                      }}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                        fieldErrors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter phone number"
                    />
                    {fieldErrors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      value={currentData.address}
                      onChange={(e) => {
                        const updateFunction = formType === 'parent' ? handleParentInputChange : handleTeacherInputChange;
                        updateFunction('address', e.target.value);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter address"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 1: Child Information (Parent) or Qualifications (Teacher) */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                {formType === 'parent' ? (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Child Information</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Child Name *
                        </label>
                        <input
                          type="text"
                          value={parentData.childName}
                          onChange={(e) => handleParentInputChange('childName', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            fieldErrors.childName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter child name"
                        />
                        {fieldErrors.childName && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.childName}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Child Age *
                        </label>
                        <input
                          type="number"
                          value={parentData.childAge}
                          onChange={(e) => handleParentInputChange('childAge', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            fieldErrors.childAge ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter age"
                          min="4"
                          max="18"
                        />
                        {fieldErrors.childAge && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.childAge}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Child Class *
                        </label>
                        <input
                          type="text"
                          value={parentData.childClass}
                          onChange={(e) => handleParentInputChange('childClass', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            fieldErrors.childClass ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter class"
                        />
                        {fieldErrors.childClass && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.childClass}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Qualifications</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Qualification *
                        </label>
                        <input
                          type="text"
                          value={teacherData.qualification}
                          onChange={(e) => handleTeacherInputChange('qualification', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            fieldErrors.qualification ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter qualification"
                        />
                        {fieldErrors.qualification && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.qualification}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Experience *
                        </label>
                        <input
                          type="text"
                          value={teacherData.experience}
                          onChange={(e) => handleTeacherInputChange('experience', e.target.value)}
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                            fieldErrors.experience ? 'border-red-500 focus:ring-red-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter experience"
                        />
                        {fieldErrors.experience && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {fieldErrors.experience}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            )}

            {/* Step 2: Preferences */}
            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {formType === 'parent' ? 'Learning Preferences' : 'Teaching Preferences'}
                </h2>

                {/* Subjects */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Subjects *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => handleSubjectToggle(subject)}
                        className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                          currentData.subjects.includes(subject)
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white border-blue-500 shadow-md'
                            : 'border-gray-300 text-blue-700 hover:border-blue-400 hover:text-purple-600'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Curriculum */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {formType === 'parent' ? 'Curriculum *' : 'Curriculum *'}
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {curriculums.map((curriculum) => (
                      <button
                        key={curriculum}
                        type="button"
                        onClick={() => handleCurriculumToggle(curriculum)}
                        className={`p-3 rounded-lg border-2 transition-all font-semibold ${
                          (formType === 'parent' ? parentData.curriculum === curriculum : teacherData.curriculum.includes(curriculum))
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-purple-500 shadow-md'
                            : 'border-gray-300 text-purple-700 hover:border-purple-400 hover:text-blue-600'
                        }`}
                      >
                        {curriculum}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mode */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {formType === 'parent' ? 'Learning Mode *' : 'Teaching Mode *'}
                    </label>
                    <select
                      value={formType === 'parent' ? parentData.learningMode : teacherData.teachingMode}
                      onChange={(e) => {
                        const field = formType === 'parent' ? 'learningMode' : 'teachingMode';
                        const updateFunction = formType === 'parent' ? handleParentInputChange : handleTeacherInputChange;
                        updateFunction(field, e.target.value);
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select mode</option>
                      <option value="home">Home Tuition</option>
                      <option value="online">Online</option>
                      <option value="both">Both</option>
                    </select>
                  </div>

                  {formType === 'parent' ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Time
                      </label>
                      <input
                        type="text"
                        value={parentData.preferredTime}
                        onChange={(e) => handleParentInputChange('preferredTime', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="e.g., Weekdays 4-6 PM"
                      />
                    </div>
                  ) : (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability
                      </label>
                      <input
                        type="text"
                        value={teacherData.availability}
                        onChange={(e) => handleTeacherInputChange('availability', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="e.g., Weekdays 4-8 PM"
                      />
                    </div>
                  )}
                </div>

                {formType === 'teacher' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Location
                    </label>
                    <input
                      type="text"
                      value={teacherData.preferredLocation}
                      onChange={(e) => handleTeacherInputChange('preferredLocation', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Enter preferred location"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    value={currentData.additionalInfo}
                    onChange={(e) => {
                      const field = 'additionalInfo';
                      const updateFunction = formType === 'parent' ? handleParentInputChange : handleTeacherInputChange;
                      updateFunction(field, e.target.value);
                    }}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="Any additional information..."
                  />
                </div>
              </motion.div>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Review & Submit</h2>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    {formType === 'parent' ? 'Parent Registration Summary' : 'Teacher Registration Summary'}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Personal Information</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p><strong>Name:</strong> {formType === 'parent' ? parentData.parentName : teacherData.fullName}</p>
                        <p><strong>Email:</strong> {currentData.email}</p>
                        <p><strong>Phone:</strong> {currentData.phone}</p>
                        {currentData.address && <p><strong>Address:</strong> {currentData.address}</p>}
                      </div>
                    </div>
                    
                    {formType === 'parent' ? (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Child Information</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Child Name:</strong> {parentData.childName}</p>
                          <p><strong>Age:</strong> {parentData.childAge}</p>
                          <p><strong>Class:</strong> {parentData.childClass}</p>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h4 className="font-medium text-gray-700 mb-2">Qualifications</h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p><strong>Qualification:</strong> {teacherData.qualification}</p>
                          <p><strong>Experience:</strong> {teacherData.experience}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-medium text-gray-700 mb-2">Preferences</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p><strong>Subjects:</strong> {currentData.subjects.join(', ')}</p>
                      <p><strong>Curriculum:</strong> {formType === 'parent' ? parentData.curriculum : teacherData.curriculum.join(', ')}</p>
                      <p><strong>Mode:</strong> {formType === 'parent' ? parentData.learningMode : teacherData.teachingMode}</p>
                      {formType === 'parent' ? (
                        parentData.preferredTime && <p><strong>Preferred Time:</strong> {parentData.preferredTime}</p>
                      ) : (
                        <>
                          {teacherData.availability && <p><strong>Availability:</strong> {teacherData.availability}</p>}
                          {teacherData.preferredLocation && <p><strong>Preferred Location:</strong> {teacherData.preferredLocation}</p>}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevStep}
                disabled={currentStep === 0}
                variant="outlined"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: '1rem',
                  textTransform: 'none',
                  fontWeight: '600',
                  borderColor: '#d1d5db',
                  color: '#666',
                  '&:hover': {
                    borderColor: '#3b82f6',
                    color: '#3b82f6',
                  },
                  '&:disabled': {
                    borderColor: '#e5e7eb',
                    color: '#9ca3af',
                  },
                }}
              >
                Previous
              </Button>

              {currentStep < currentSteps.length - 1 ? (
                <Button
                  onClick={nextStep}
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '1rem',
                    textTransform: 'none',
                    fontWeight: '600',
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    '&:hover': {
                      background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                    },
                  }}
                >
                  Next
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '1rem',
                    textTransform: 'none',
                    fontWeight: '600',
                    background: 'linear-gradient(to right, #10b981, #059669)',
                    '&:hover': {
                      background: 'linear-gradient(to right, #059669, #047857)',
                    },
                    '&:disabled': {
                      background: '#9ca3af',
                    },
                  }}
                  startIcon={isSubmitting ? <Loader className="animate-spin" size={20} /> : <Send size={20} />}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                </Button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Success Modal */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for registering with Brain Breeze Tutors. We will contact you shortly to discuss the next steps.
                </p>
                <Button
                  onClick={() => setShowSuccess(false)}
                  variant="contained"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: '1rem',
                    textTransform: 'none',
                    fontWeight: '600',
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6)',
                    '&:hover': {
                      background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                    },
                  }}
                >
                  Close
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default BrainBreezeRegistration;