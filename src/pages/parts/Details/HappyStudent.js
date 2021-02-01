import React from 'react'

import Star from '../../../compnents/Start/'

export default function HappyStudent({data}) {
    return (
        <div className="mt-8">
            <Star value={data?.rating ?? 0} width={26} height={26}></Star>
            <p className="text-gray-600 mt-1">{data?.note ?? "student's response"}</p>
            <div className="flex item-center mt-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                    <img src={data?.users?.avatar ?? ""} alt={data?.users?.name ?? "student's name"} className="object-cover"/>
                </div>
                <div className="ml-4">
                    <h2 className="text-lg text-gray-900">
                        { data?.users?.name ?? "student's name" }
                    </h2>
                    <h2 className="text-sm text-gray-600">
                        { data?.users?.role ?? "student's role" }
                    </h2>
                </div>
            </div>
        </div>
    )
}
