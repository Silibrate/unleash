import community from './community.module.scss';
const Community = () => {
    return (
        <div className={community.community}>
            <h2 className={community.title}>Join the largest gaming community</h2>
            <p className={community.text}>Nulla porttitor accumsan tincidunt. Curabitur non nulla sit amet nisl tempus lectus. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesu ada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo</p>
            <form className={community.form} action="submit">
            <input minLength="10" type="email"  name="email" placeholder=" Your Email Address" className={community.input}/>
            <button className={community.button}>Subscribe Now</button>
            </form>
        </div>
    );
}

export default Community;