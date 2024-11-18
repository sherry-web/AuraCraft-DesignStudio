import React from 'react';
import { motion } from 'framer-motion';

function FadeInComponent() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <h2>Welcome to AuraCraft Design Studio</h2>
      <p>We are committed to delivering exceptional design and development services.</p>
    </motion.div>
  );
}

export default FadeInComponent;