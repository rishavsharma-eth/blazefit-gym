import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Navigation */}
        <div className={styles.navContainer}>
          <div className={styles.navWrapper}>
            <div className='logoText'>
              <span className='logoText1'>Blaze</span>
              <span className='logoText2'>fit</span>
            </div>
            <MenuIcon className="menuIcon" />
          </div>
        </div>
        

        {/* Header */}

        {/* Companies Logos */}

        {/* Our Programs */}

        {/* WHy choose us */}

        {/* Pricing */}

        {/* BMI calculator */}

        {/* Footer */}

      </main>

      <footer className={styles.footer}>
        
          
      </footer>
    </div>
  )
}
