import React, { useEffect, useState } from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInForm = () => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const placeholderText = 'Enter your text here...';

    // Function to add the placeholder
    const addPlaceholder = (inputElement) => {
      if (inputElement && !inputValue) {
        const placeholderElement = document.createElement('span');
        placeholderElement.textContent = placeholderText;
        placeholderElement.className = 'custom-placeholder';

        inputElement.parentNode.insertBefore(placeholderElement, inputElement);

        // Style the placeholder like a native placeholder
        placeholderElement.style.position = 'absolute';
        placeholderElement.style.pointerEvents = 'none';
        placeholderElement.style.left = '10px';
        placeholderElement.style.top = '70%';
        placeholderElement.style.transform = 'translateY(-50%)';
        placeholderElement.style.color = 'gray';

        inputElement.addEventListener('focus', () => {
          placeholderElement.style.display = 'none';
        });

        inputElement.addEventListener('blur', () => {
          if (!inputElement.value) {
            placeholderElement.style.display = 'block';
          }
        });
      }
    };

    // Observer to monitor DOM changes
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          const inputElement = document.querySelector('.cl-input');
          if (inputElement) {
            addPlaceholder(inputElement);
            observer.disconnect(); // Stop observing once the input is found and placeholder is added
            break;
          }
        }
      }
    });

    // Start observing the SignIn component's DOM node
    const signInElement = document.querySelector('.cl-sign-in');
    if (signInElement) {
      observer.observe(signInElement, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect(); // Clean up the observer when the component unmounts
    };
  }, [inputValue]);

  return (
    <div>
      <section className="mb-12 space-y-4">
        <h1 className="header">Welcome to HealthTrack</h1>
        <p className="text-dark-700">Healthier lives, one track at a time.</p>
      </section>
      <SignIn />
    </div>
  );
};

export default SignInForm;