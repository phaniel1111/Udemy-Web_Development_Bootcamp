import React from "react";
import {canisterId, createActor} from "../../../declarations/token";
import { AuthClient } from '@dfinity/auth-client';

function Faucet(props) {

  const [isDisabled,setIsDisabled] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Gimme Gimme");
  
  async function handleClick(event) {
    setIsDisabled(true);
    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions:{
        identity,
      },
    })
    const result = await authenticatedCanister.faucet();
    setButtonText(result);
    //setIsDisabled(false);
  }

  return (
    <div className="window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free Phaniel tokens here! Claim 10,000 PTK tokens to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
