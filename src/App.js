
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Invest In Baskets Of Top Performing Cryptocurrencies"
        description="CryptoBucket provides an easy way to strategically invest in baskets of crypto assets so that you don’t miss out on investing early in the next Google or Facebook."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface "
        description="Experience a buttery UI. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
      />
      <Features />
      <SectionWrapper
        title="Deployment"
        description="CryptoBucket is built using Expo which runs natively on all user's devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
      <SectionWrapper
        title="Creative way to showcase the app"
        description="The app contains two screens. The first screen lists all Buckets carrying crptocurrencies while the second one shows the details of a specific bucket."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love in {" "}
          <span className="bold">India ❤️</span>
        </p>
      </div>
    </>
  );
}

export default App;
