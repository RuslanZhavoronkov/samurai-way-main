import React from "react"

export type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    constructor(props: ProfileStatusPropsType) {
        super(props)
    }
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
             editMode: true
        })  
    }

    deactivateEditMode = ()=> {
        this.setState({
            editMode: false
        })
    }
    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} value={this.props.status} onBlur={this.deactivateEditMode}/>
                    </div>
                }
            </div>

        )
    }
}

