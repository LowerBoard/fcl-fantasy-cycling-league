import React from 'react'
import { PlusCircle, MinusCircle, Users, Lock } from 'lucide-react';

function cyclistRow({rider, onAction, actionType}) {
    const isAdding = actionType === 'add';
    const isRemoving = actionType === 'remove';
    const isDisabled = actionType === 'disabled';

    let buttonIcon;
    let buttonMessage;
    let buttonColor;
    let buttonDisabled = false;

    if (isAdding) {
        buttonIcon = <PlusCircle size={16}/>;
        buttonMessage = 'Add Rider';
        buttonColor = 'bg-green-400';
    } else if (isRemoving) {
        buttonIcon = <MinusCircle size={16}/>;
        buttonMessage = 'Remove Rider';
        buttonColor = 'bg-red-400';
    } else if (isDisabled) {
        buttonIcon = <Lock size={16}/>;
        buttonMessage = 'Team Full';
        buttonColor = 'bg-slate-400';
    };

    

  return (
    <div>
        <tr>
            <td>
                <div>{rider.name}</div>
                <div>{rider.country}</div>
            </td>
            <td>{rider.team}</td> 
            <td>${rider.cost}</td>
            <td>
                <button 
                    onClick={() => onAction(rider.id)}
                    className ={`${buttonColor}`}
                    disabled = {buttonDisabled}
                    >
                        {buttonIcon}
                        <span>{buttonMessage}</span>
                </button>
            </td>   
        </tr>
    </div>
  )
}

export default cyclistRow