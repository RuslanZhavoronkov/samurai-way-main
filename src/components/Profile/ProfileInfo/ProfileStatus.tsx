import React, { ChangeEvent } from "react"

export type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    constructor(props: ProfileStatusPropsType) {
        super(props)
    }
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }


    onChangeStatusHandler = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

    this.props.updateProfileStatus(this.state.status)    
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode} >{this.props.status || 'Hello my friend'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} value={this.state.status} onBlur={this.deactivateEditMode} onChange={this.onChangeStatusHandler} />
                    </div>
                }
            </div>

        )
    }
}

