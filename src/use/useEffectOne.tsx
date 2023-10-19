import React, { EffectCallback, useEffect } from 'react'
//rafce
const useEffectOne = (effect: EffectCallback) => {
    useEffect(effect, []);
}

export default useEffectOne