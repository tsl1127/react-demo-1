import React from 'react'

interface Props {
    code: String;
}

const Demo: React.FunctionComponent<Props> = (props) => {
    return (
        <div>
            {props.children}
            <pre>
                {props.code}
            </pre>
        </div>
    )
}

export default Demo