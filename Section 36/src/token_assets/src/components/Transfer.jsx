import React from "react";
import {Principal} from "@dfinity/principal";
import {canisterId, createActor} from "../../../declarations/token";
import { AuthClient } from '@dfinity/auth-client';

function Transfer() {

  const [toThisID, setToThisID] = React.useState("");
  const [sendAmount, setSendAmount] = React.useState("");
  const [isDisabled,setIsDisabled] = React.useState(false);
  const [feedback, setFeedback] = React.useState("");
  
  async function handleClick() {
    const principal = Principal.fromText(toThisID);
    const amount = Number(sendAmount);

    setIsDisabled(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions:{
        identity,
      },
    })

    const result = await authenticatedCanister.transfer(principal, amount);
    setFeedback(result);
    setIsDisabled(false);
  }

  return (
    <div className="window">
      <h2>Transfer</h2>
      <div className="transfer">
        <fieldset>
          <legend>To Principal ID:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value ={toThisID}
                onChange ={(e) => setToThisID(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value ={sendAmount}
                onChange ={(e) => setSendAmount(e.target.value)}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled}>
          Transfer
          </button>
        </p>
        <p>{feedback}</p>
      </div>
    </div>
  );
}

export default Transfer;
