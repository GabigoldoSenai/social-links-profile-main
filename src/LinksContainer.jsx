import './LinksContainer.css'
import avatarImg from './assets/images/avatar-jessica.jpeg'

const Description = (props) => {
  return (
    <>
      <img class="avatar-img" src={props.img} alt="Avatar Img" />
      <div className="name">
        <h3>{props.name}</h3>
      <h5>{props.location}</h5>
      </div>
      
      <p>"{props.role}"</p>
    </>
  )
}

const Btn = (props) => {
  const weblink = () => {
    window.open(props.link, '_blank');
  };

  return (
    <button className="btn-link" type="button" onClick={weblink}>{props.title}</button>
  );
};


function LinksContainer() {

  return (
    <div className="links-container">
      <div className="profile-pic">
        <Description img={avatarImg} name="Jessica Randall" location="London, United Kingdom" role="Front-end developer and avid reader" />
      </div>
      
      <Btn title="GitHub" link="https://www.github.com" />
      <Btn title="Frontend Mentor" link="https://www.frontendmentor.io/" />
      <Btn title="LinkedIn" link="https://www.linkedin.com" />
      <Btn title="Twitter" link="https://www.twitter.com" />
      <Btn title="Instagram" link="https://www.instagram.com" />
    </div>
  )
}

export default LinksContainer