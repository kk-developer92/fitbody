<template>
    <main class="page">
        <section class="promo page__promo py-3 py-md-5">
            <div class="container py-3">
                <div class="promo__wrapper row align-items-center">
                    <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
                        <img :src="'https://fitseven.ru/wp-content/uploads/2019/07/pitanie-pri-trenirovkah-na-massu.jpg'"
                            alt="">
                    </div>
                    <div class="promo__text col-lg-7 col-xl-7">
                        <button @click="$router.go(-1)" class="page-nav">
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor" />
                            </svg>
                            Назад
                        </button>
                        <h1>Day 1 Chest & Triceps</h1>
                        <div class="promo__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem velit fugit odit. Aperiam,
                            suscipit doloremque? Ab, ad! Sed, repellendus! Magni porro perspiciatis voluptatibus ratione,
                            neque provident veniam ipsam officiis.
                        </div>

                    </div>

                </div>
            </div>
        </section>

        <div class="container">
            <section class="training-page">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class=" py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row justify-content-center">
                                    <div class="col-md-10">
                                        <div class="list-group list-group-flush">
                                            <div class="card border-0 mb-3 shadow">
                                                <div class="card-body border-bottom">
                                                    <h5 class="card-title mb-0">Warm Up - Repeat 3 times</h5>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="http://www.youtube.com/embed/loFtozxZG0s"
                                                        data-theVideo="http://www.youtube.com/embed/loFtozxZG0s">
                                                        <div class="d-flex align-items-center">
                                                            <div class="flex-shrink-0">
                                                                <img class="rounded mr-3 flex-shrink-0" width="128"
                                                                    height="72"
                                                                    src="https://i.vimeocdn.com/video/1698395945-dc424ee57fc8602720a99b21fc243c74ae8c049e4b5a84edbf1afe405abbd27e-d_320x180?r=pad"
                                                                    alt="Exercise image">
                                                            </div>
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Jumping Jacks</h6>
                                                                <p class="mb-0">30 seconds</p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="list-group-item b-0 py-2 text-decoration-none">
                                                        <div class="d-flex align-items-center">
                                                            <a href="#"
                                                                class="position-relative mr-3 flex-shrink-0 overlay">
                                                                <img class="rounded" width="128" height="72"
                                                                    src="https://i.vimeocdn.com/video/1701250328-8d85b1493b149f26c7bb622f0a22dd87a09b447bcfb5d13f0046784fa7299199-d_320x180?r=pad"
                                                                    alt="Exercise image">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                                        class="bi bi-play-circle-fill text-white position-absolute top-50 start-50 translate-middle w-25 opacity-75" viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                                                    </svg>
                                                            </a>
                                                            <div class="flex-grow-1 ms-3">
                                                                <div class="row">
                                                                    <div class="col">
                                                                        <h6 class="mb-0 text-white">Low Plank To High Plank
                                                                        </h6>
                                                                        <p class="mb-0">7 reps each</p>
                                                                    </div>
                                                                    <div
                                                                        class="col-auto flex-shrink-0 d-flex gap-3 align-items-center">
                                                                        <div>
                                                                            <h6 class="mb-0 text-white">Результат:</h6>
                                                                            <p class="mb-0 small">58x12,12,12</p>
                                                                        </div>
                                                                        <button class="btn text-danger">
                                                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="20" height="20" fill="currentColor"
                                                                                class="bi bi-pencil-square"
                                                                                viewBox="0 0 16 16">
                                                                                <path
                                                                                    d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                <path fill-rule="evenodd"
                                                                                    d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card border-0 mb-3 shadow">
                                                <div class="card-body border-bottom">
                                                    <h5 class="card-title mb-0">Round 1 - Repeat 3 times</h5>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/823">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/1093778111-735040d45debf59f898d3fbdae98d8b613fa9faa9b31c93a0f4d7a4546c0dcb1-d_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Assisted Dips Resistance Band
                                                                </h6>
                                                                <p class="mb-0">7 reps</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/834">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/1093778469-3164d3eb311d1de52b09052b84415589e9f1888ea5c151ba819ed74ebba80c48-d_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Assisted Straight Bar Dips
                                                                    Resistance Band</h6>
                                                                <p class="mb-0">10 reps</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/1144">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/1368388277-9f182bf3902673a2a0ac1d195369b9c898a05a1977b42b7438c7e2598bc865f4-d_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Incline Push Ups Resistance Band
                                                                </h6>
                                                                <p class="mb-0">7 reps</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/1041">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/1275404589-55fc7e873974b2a18093711cd64d18e522d9be31d46dcd5b3_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Resistance Band Fly's</h6>
                                                                <p class="mb-0">12 reps</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card border-0 mb-3 shadow">
                                                <div class="card-body border-bottom">
                                                    <h5 class="card-title mb-0">Round 2 - Repeat 3 times</h5>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/1147">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/1368388521-89369aa6ec7151cc76e001efbd1f35fc91f8b2670f92673d75282f5a0f71e63c-d_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Knee Tricep Extensions
                                                                    Resistance
                                                                    Band</h6>
                                                                <p class="mb-0">10 reps</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/847">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/1093778646-8d47c5dcebf2445b4701ef4b58b6393f21b2a7e41833b5e2bf5dcf042ce0991a-d_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Overhead Tricep Extension
                                                                    Resistance Band</h6>
                                                                <p class="mb-0">10 reps</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/604">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/816170440-4346a61a22957c33ca78b64f1555ee737379aad1f61543c739eb5ea5d0ed6956-d_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Tricep Kick Backs Single Arm
                                                                    Resistance Band</h6>
                                                                <p class="mb-0">10 reps each</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="list-group-item b-0 py-2 text-decoration-none"
                                                        data-bs-toggle="modal" data-bs-target="#js-modal" data-remote="true"
                                                        href="/exercises/859">
                                                        <div class="d-flex align-items-center">
                                                            <img class="rounded mr-3 flex-shrink-0" width="128" height="72"
                                                                src="https://i.vimeocdn.com/video/1093779113-24403ce4cfc2a84c8ab8fd56db0fdfc314d9e58170c1a10fa8dbfcaff5d033ca-d_320x180?r=pad"
                                                                alt="Exercise image">
                                                            <div class="flex-grow-1 ms-3">
                                                                <h6 class="mb-0 text-white">Tricep Extension Single Arm
                                                                    Resistance Band</h6>
                                                                <p class="mb-0">10 reps each</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>




                    </div>
                </div>
            </section>

        <div class="modal fade" id="js-modal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        </div>

    </div>
</main></template>

<script type="ts">

</script>