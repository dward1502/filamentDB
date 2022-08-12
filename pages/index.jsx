import Head from 'next/head';
import Image from 'next/image';
import styles from '../sass/home.module.scss';
import EmailBanner from '../components/UI/emailBanner';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/filamentSpool.ico' />
      </Head>
      <section className={styles.hero}>
        <div className={styles.infoBox}>
          <div className={styles.image}>
            <Image
              src={'/fdmPrinter.jpg'}
              layout='fill'
              objectFit='contain'
              className={styles.img}
            />
          </div>
          <div className={styles.text}>
            <h1>Looking for the right filament?</h1>
            <p>
              We are here to provide a comprehensive list of filament for FDM
              printers. Our goal is to create a database where you can have an
              informed decision of the specifications and requirements for the
              multitude of filaments in the 3d printing world.
            </p>
            <p>
              Can dynamically search a variety of different types, manufactures
              colors etc.
            </p>
          </div>
        </div>
        <div className={styles.recentAddedBox}>
          <div className={styles.recentImg}>
            <Image
              src={'/mostRecent.jpg'}
              layout='fill'
              objectFit='contain'
              className={styles.img}
            />
          </div>
        </div>
      </section>
      <section className={styles.homeSection}>
        <div className={styles.detailsBox}>
          <h1>Help us Grow!</h1>
          <p>
            With around 100+ filaments currently on the site, there’s a lot more
            room to grow! We are always on the lookout for new filaments. Let me
            know if you’ve got something interesting that you’d like to donate
            to the site; or else perhaps we could trade filament samples too!
          </p>
        </div>
        <div className={styles.callToActionBox}>
          <div className={styles.plaBtn}>
            <p>PLA</p>
          </div>
          <div className={styles.petgBtn}>
            <p>PETG</p>
          </div>
        </div>
      </section>
      <EmailBanner />
    </div>
  );
}
