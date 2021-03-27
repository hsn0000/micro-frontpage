import React from 'react'
import Link from 'next/link'
import formatThousand from '../../../helpers/formatThousand';

export default function RenderItem({item}) {
    return (
        <div className="w-3/6 md:w-1/6 px-4 h-100 mb-8 md:mb-0">
            <div className="card relativev transition-all duration-300">
                {item?.imageName ? item?.imageName : ""}
                <div className="card-meta mt-10">
                    <h4 className="text-lg transition-all duration-200 w-1/2">
                        {item?.name}
                    </h4>
                    <h5 className="text-sm transition-all duration-500 mt-2">
                        {formatThousand(item?.total)}
                    </h5>
                    <Link href="#"><a className="link-wrapped"></a></Link>
                </div>
            </div>
        </div>
    )
}
