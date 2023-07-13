import {Preloader} from "../components/common/Preloader/Preloader";
import React, {ComponentType} from "react";
import {Suspense} from 'react';

export function WithSuspense<T>(Component: ComponentType<T>) {

    return (props: any) => {
        return (
            <Suspense fallback={<div className={'page'} style={{}}><Preloader/></div>}>
                <Component {...props as T}/>
            </Suspense>
        )
    }
}