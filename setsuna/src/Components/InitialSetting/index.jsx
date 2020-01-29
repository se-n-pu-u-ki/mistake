import React from 'react';

class InitialSetting extends React.Component {
    cunstructor(){
        super();
    }
    render(){
        return(
            <div className='InitialSetting'>
                <div className="personnalInformation">
                    <textarea name="nickname" id="" cols="30" rows="10"></textarea>
                    <textarea name="yearold" id="" cols="30" rows="10"></textarea>
                    <textarea name="sex" id="" cols="30" rows="10"></textarea>
                </div>
                <div className="topics">

                </div>

            </div>
        )
    }
}

export default InitialSetting;