import React, { useState } from 'react';


const Like = () => {
    const [like, setLike] = useState(0);
    return (
        <div>
            <p>
                졸리다졸려 라꾸라꾸 <b>{like}</b> 사서 노숙해야지</p>
            <button onClick={() => setLike(like + 1)}>+1😂</button>

        </div>
    );
}
export default Like;