import Image from "next/image";
import styled from "styled-components";

type BasicInfoProps = {
  user: {
    username: string;
    email: string;
  };
  walletBalance: string;
};

const BasicInfo = ({ user, walletBalance }: BasicInfoProps): JSX.Element => {
  return (
    <Wrap>
      <div className="me">
        <Image
          src={`/assets/avatar.jpg`}
          alt="User image"
          width={54}
          height={54}
          className={`rounded-circle`}
        />
        <div className="name">
          <h2>Hi, {user?.username}</h2>
          <p>{user?.email}</p>
        </div>
      </div>

      <div className="balance">
        <p>₦{walletBalance}</p>
      </div>
    </Wrap>
  );
};

const Wrap = styled.section`
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .me {
    display: flex;
    align-items: center;

    .name {
      margin-left: 20px;
      h2,
      p {
        padding: 0;
        margin: 0;
      }
      h2 {
        font-size: 20px;
        font-weight: bold;
      }
      p {
        font-size: 14px;
      }
    }
  }

  .balance {
    p {
      padding: 0;
      margin: 0;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

BasicInfo.defaultProps = {
  walletBalance: "*** *** ***",
};

export default BasicInfo;
