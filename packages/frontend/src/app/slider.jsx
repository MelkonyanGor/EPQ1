import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './css/nx-welcome.css'


// import required modules
import { Pagination, Navigation } from "swiper";

export default function Slider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    const page = () => {
        return (
            <table>
                <tr >
                    <th>Route ID</th>
                    <th>Start address</th>
                    <th>End address</th>
                    <th>Workload index</th>
                    <th>Usage index</th>
                    <th>Start date</th>
                    <th>End date</th>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
                <tr>
                    <td>8074567876543</td>
                    <td>Ney York City, 5th avenue, sq....</td>
                    <td>This status inform</td>
                    <td>12</td>
                    <td>23</td>
                    <td>13 May 2022 - 11:20</td>
                    <td>13 May 2022 - 11:23</td>
                </tr>
            </table>
        )
    }

    return (
        <>
            <div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>{page}</SwiperSlide>
                    <SwiperSlide>{page}</SwiperSlide>
                    <SwiperSlide>{page}</SwiperSlide>
                    <SwiperSlide>{page}</SwiperSlide>
                    <SwiperSlide>{page}</SwiperSlide>
                    <SwiperSlide>{page}</SwiperSlide>
                    <SwiperSlide>{page}</SwiperSlide>
                    <SwiperSlide>{page}</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
