// utils/eventHelpers.js
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const validateEvent = (event) => {
  const requiredFields = ['title', 'date', 'location', 'category', 'description'];
  return requiredFields.every(field => Boolean(event[field]));
};