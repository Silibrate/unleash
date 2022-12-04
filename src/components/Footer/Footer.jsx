import footer from './footer.module.scss';
import footerLogo from '../../images/footerLogo.svg';
const Footer = () => {
  return (
    <div className={footer.footer}>
      <div className={footer.container}>
        <div className={footer.info}>
          <img src={footerLogo} alt="Logo" />
          <p className={footer.text}>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
        </div>
        <div className={footer.items}>
          <h3 className={footer.items__title}>Menu Items</h3>
          <ul className={footer.lists}>
            <li className={footer.list}>About</li>
            <li className={footer.list}>Blog</li>
            <li className={footer.list}>Shop</li>
            <li className={footer.list}>Contact us</li>
            </ul>
        </div>
        <div className={footer.items}>
          <h3 className={footer.items__title}>Other Pages</h3>
          <ul className={footer.lists}>
            <li className={footer.list}>Styleguide</li>
            <li className={footer.list}>Changelog</li>
            <li className={footer.list}>licenses</li>
            <li className={footer.list}>Team</li>
            </ul>
        </div>
        <div className={footer.items}>
          <h3 className={footer.socil__title}>Social Icons</h3>
          <div className={footer.socil__container}>
            <div className={footer.socil__icon}></div>
            <div className={footer.socil__icon}></div>
            <div className={footer.socil__icon}></div>
            <div className={footer.socil__icon}></div>
          </div>
        </div>
      </div>
      <p className={footer.bottom}>Copyright by 2021 Flowzai</p>
    </div>
  );
}

export default Footer;