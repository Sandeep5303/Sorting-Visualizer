import toast from 'react-hot-toast';

// Generating random numbers in the range min and max
export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Coloring bars and Container border to initial color onClick generate
export const changeColorToInitial = () => {
  const arrayBars = document.querySelectorAll('.bar');
  for (const bar of arrayBars) {
    bar.style.background = 'cyan';
  }
  const container = document.querySelector('.container');
  container.style.borderColor = 'cyan';
};

// Custom Toast Message
export const customToast = (type, text) => {
  const customStyle = {
    style: {
      border: '2px solid cyan',
      padding: '16px',
      background: 'rgb(22, 22, 22)',
      color: '#fff',
    },
    iconTheme: {
      primary: 'cyan',
      secondary: '#333',
    },
  };
  if (type === 'success') {
    toast.success(text, customStyle);
  } else {
    toast.error(text, customStyle);
  }
};
