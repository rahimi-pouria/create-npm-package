<template>
    <div class="flex w-full text-black gap-5">
        <div class="flex w-1/2 sm:w-full">
            <!-- header create address -->
            <div class="flex flex-col p-3 w-full gap-4 sm:w-full">
                <h2 class="text-lg text-black font-bold">
                    ثبت آدرس
                </h2>   
                    <div class="flex bg-white drop-shadow-md">
                        <form class="w-full flex flex-col pt-3 pb-3 gap-4 bg-white drop-shadow-md p-4">
                            <div class="flex w-full text-black gap-9">
                                <div class="relative mb-3 w-1/2" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded 
                                        border-0 bg-transparent px-3 py-[0.32rem] 
                                        leading-[1.6] outline-none transition-all
                                        text-black
                                        duration-200 ease-linear focus:placeholder:opacity-100 
                                        peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100
                                        motion-reduce:transition-none
                                        dark:peer-focus:text-primary 
                                        form-create-Address
                                        [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput1"
                                        placeholder="نام" />
                                    <label
                                        for="exampleFormControlInput1"
                                        class="pointer-events-none absolute right-3 
                                        top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                                        leading-[1.6] text-black transition-all 
                                        duration-200 ease-out peer-focus:-translate-y-[0.9rem]
                                        peer-focus:scale-[0.8] peer-focus:text-primary 
                                        peer-data-[te-input-state-active]:-translate-y-[0.9rem]
                                        peer-data-[te-input-state-active]:scale-[0.8] 
                                        motion-reduce:transition-none 
                                        dark:peer-focus:text-primary"
                                        >نام
                                    </label>
                                </div>
                                <div class="relative w-1/2 text-black mb-3" data-te-input-wrapper-init>
                                    <input
                                        type="text"
                                        class="peer block min-h-[auto] w-full rounded 
                                        border-0 bg-transparent px-3 py-[0.32rem] 
                                        leading-[1.6] outline-none transition-all
                                        duration-200 ease-linear focus:placeholder:opacity-100 
                                        peer-focus:text-primary 
                                        data-[te-input-state-active]:placeholder:opacity-100
                                        motion-reduce:transition-none 
                                        form-create-Address
                                        dark:peer-focus:text-primary 
                                        [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput1"
                                        placeholder="نام خانوادگی" />
                                    <label
                                        for="exampleFormControlInput1"
                                        class="pointer-events-none absolute right-3 
                                        top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                                        leading-[1.6] text-black transition-all 
                                        duration-200 ease-out peer-focus:-translate-y-[0.9rem]
                                        peer-focus:scale-[0.8] peer-focus:text-primary 
                                        peer-data-[te-input-state-active]:-translate-y-[0.9rem]
                                        peer-data-[te-input-state-active]:scale-[0.8] 
                                        motion-reduce:transition-none
                                        dark:peer-focus:text-primary"
                                        >نام خانوادگی
                                    </label>
                                </div>
                            </div>
                            <!-- phone number -->
                            <div class="relative text-black mb-3" data-te-input-wrapper-init>
                                <input
                                    type="number"
                                    class="peer block min-h-[auto] w-full rounded 
                                    border-0 bg-transparent px-3 py-[0.32rem] 
                                    leading-[1.6] outline-none transition-all
                                    duration-200 ease-linear focus:placeholder:opacity-100 
                                    peer-focus:text-primary 
                                    data-[te-input-state-active]:placeholder:opacity-100
                                    motion-reduce:transition-none 
                                    form-create-Address
                                    dark:peer-focus:text-primary 
                                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                    placeholder="شماره همراه" />
                                <label
                                    for="exampleFormControlInput1"
                                    class="pointer-events-none absolute right-1 
                                    top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                                    leading-[1.6] text-black transition-all 
                                    duration-200 ease-out peer-focus:-translate-y-[0.9rem]
                                    peer-focus:scale-[0.8] peer-focus:text-primary 
                                    peer-data-[te-input-state-active]:-translate-y-[0.9rem]
                                    peer-data-[te-input-state-active]:scale-[0.8] 
                                    motion-reduce:transition-none
                                    dark:peer-focus:text-primary"
                                    >شماره همراه
                                </label>
                            </div>
                            <div class="relative text-black mb-3" data-te-input-wrapper-init>
                                <input
                                    type="number"
                                    class="peer block min-h-[auto] w-full rounded 
                                    border-0 bg-transparent px-3 py-[0.32rem] 
                                    leading-[1.6] outline-none transition-all
                                    duration-200 ease-linear focus:placeholder:opacity-100 
                                    peer-focus:text-primary 
                                    data-[te-input-state-active]:placeholder:opacity-100
                                    motion-reduce:transition-none 
                                    form-create-Address
                                    dark:peer-focus:text-primary 
                                    [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                    id="exampleFormControlInput1"
                                    placeholder="شماره تلفن ثابت" />
                                <label
                                    for="exampleFormControlInput1"
                                    class="pointer-events-none absolute right-1 
                                    top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] 
                                    leading-[1.6] text-black transition-all 
                                    duration-200 ease-out peer-focus:-translate-y-[0.9rem]
                                    peer-focus:scale-[0.8] peer-focus:text-primary 
                                    peer-data-[te-input-state-active]:-translate-y-[0.9rem]
                                    peer-data-[te-input-state-active]:scale-[0.8] 
                                    motion-reduce:transition-none
                                    dark:peer-focus:text-primary"
                                    >شماره تلفن ثابت
                                </label>
                            </div>
                            <div class="flex flex-col gap-5 w-full">
                                <label for="address">آدرس</label>
                                <textarea id="address"
                                        class="resize-y
                                        rounded-md
                                        focus:outline-none
                                        form-create-Address
                                        w-full" />
                            </div>
                            <button type="submit"
                             class="rounded
                              bg-[#00bfa5]
                               text-white p-1 font-bold">ثبت و ادامه</button>
                        </form>
                    </div>
            </div>
        </div>
        <div class="flex flex-col w-1/2 sm:w-full drop-shadow-md">
            <h2 class="text-lg text-black font-bold">
                    ثبت موقعیت 
            </h2>  
            <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" style="width: 100%; height: 500px" :center="center" :zoom="15">
                <Marker :options="{}" />
            </GoogleMap> 
            <button type="submit"
                    class="rounded
                    bg-[#00bfa5]
                    text-white p-1 font-bold">
                    ثبت و ادامه
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import google map
import { GoogleMap, Marker } from "vue3-google-map";

</script>

<style scoped>
    .form-create-Address{
        border-right: none !important;
        border-left: none !important;
        border-top: none !important;
        border-bottom: 1.5px solid green !important;
    }
</style>