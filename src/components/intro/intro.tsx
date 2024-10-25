import styles from './intro.module.css';
import ResumeViewer from '../ResumeViewer/ResumeViewer';
import { TypeAnimation } from 'react-type-animation';

const Intro = () => {
  const resumeLink = `https://drive.google.com/file/d/1hCJs6WjX_xr71MpowLx4Dzn4gJ0mUwmj/view?usp=drive_link`;
  return (
    <section id='intro' className={styles.intro}>
      <div className={styles.introContent}>
        <span className={styles.hello}>Hello,</span>
        <span className={styles.introText}>
          I&apos;ym <span className={styles.introName}>Saleem</span> <br />
          <TypeAnimation
            sequence={[
              'Fullstack Developer',
              1000,
              'Web Designer',
              2000,
              'Java Developer',
              3000,
              'Freelancer',
              4000,
              'Backend Developer',
              5000,
              'UI Developer',
              () => {
                console.log('Sequence completed');
              },
            ]}
            wrapper='span'
            cursor={true}
            repeat={Infinity}
          />
        </span>
        <p className={styles.introPara}>
          I am a skilled fullstack developer with experience in creating
          <br />
          visually appealing and user friendly websites
        </p>
        <ResumeViewer resumeLink={resumeLink} />
      </div>
    </section>
  );
};

export default Intro;
