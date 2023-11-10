import s from "./ProfileInfo.module.css";

type ContactsSocialNetworkPropsType = {
  contactTitle: string | null;
  contactValue: string | null;
};

export const ContactsSocialNetwork: React.FC<
  ContactsSocialNetworkPropsType
> 
= ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b> : {contactValue}
    </div>
  );
};
