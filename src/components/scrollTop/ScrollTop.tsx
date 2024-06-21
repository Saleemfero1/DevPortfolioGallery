import ScrollToTop from 'react-scroll-to-top';

const ScrollTop = () => {
  return (
    <ScrollToTop
      smooth
      style={{
        backgroundColor: '#3dcfb6cc',
        boxShadow: 'inset -4px 4px 8px black, inset 4px -4px 8px black',
      }}
    />
  );
};

export default ScrollTop;
