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
                            <svg width="19" height="8" viewBox="0 0 19 8" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 4H19M1 4L4 1M1 4L4 7" stroke="currentColor"/>
                            </svg>
                            Назад
                        </button>
                        <h1>День 1</h1>
                        <div class="promo__text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quidem velit fugit odit.
                            Aperiam,
                            suscipit doloremque? Ab, ad! Sed, repellendus! Magni porro perspiciatis voluptatibus
                            ratione,
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
                                            <h2 class="mb-5">3 приёма пищи в день</h2>
                                            <!-- trainblock -->
                                            <div class="card border-0 mb-3 shadow">
                                                <div class="card-body border-bottom">
                                                    <h5 class="card-title mb-0">1-й прием пищи</h5>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <!-- INfoblock -->

                                                    <div class="list-group-item info-block b-0 py-2 text-decoration-none">
                                                        
                                                        <div>
                                                            <p class="text-white mb-1">Ингредиенты:</p>
                                                            <ul>
                                                                <li>Творог 5% - 200 гр</li>
                                                                <li>Помидоры (средние) – 2-3 шт.</li>
                                                                <li>Зелень (укроп, кинза, базилик), можно всего понемногу
                                                                    или
                                                                    что-то одно – количество
                                                                    на
                                                                    ваше усмотрение.
                                                                </li>
                                                                <li>Огурец (средний) – 1 шт.</li>
                                                                <li>Тыквенные семечки – 10 гр.</li>
                                                                <li>Грецкий орех – 20 гр.</li>
                                                                <li>Соль и перец по вкусу, но не перебарщивайте с солью.
                                                                </li>
                                                            </ul>
                                                            <p class="text-white mb-1">Способ приготовления:</p>
                                                            <p>Творог выложить в миску и размять его до однородной массы.
                                                                Помидоры и огурец нарезать кубиками и добавить к творогу.
                                                                Зелень мелко нарезать и добавить в салат.
                                                                Тыквенные семечки и грецкий орех измельчить и добавить в
                                                                салат.
                                                                Тщательно перемешать все ингредиенты, чтобы они равномерно
                                                                смешались.
                                                                Приправить солью и перцем по вкусу.
                                                                Дополнительные специи можно добавить на ваше усмотрение.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <!-- INfoblock -->



                                                </div>
                                            </div>
                                            <!-- trainblock -->

                                            <!-- trainblock -->
                                            <div class="card border-0 mb-3 shadow">
                                                <div class="card-body border-bottom">
                                                    <h5 class="card-title mb-0">2-й прием пищи</h5>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <!-- INfoblock -->

                                                    <div class="list-group-item info-block b-0 py-2 text-decoration-none">
                                                        
                                                        <div>
                                                            Ингредиенты:
                                                            <ul>
                                                                <li>Творог 5% - 200 гр</li>
                                                                <li>Помидоры (средние) – 2-3 шт.</li>
                                                                <li>Зелень (укроп, кинза, базилик), можно всего понемногу
                                                                    или
                                                                    что-то одно – количество
                                                                    на
                                                                    ваше усмотрение.
                                                                </li>
                                                                <li>Огурец (средний) – 1 шт.</li>
                                                                <li>Тыквенные семечки – 10 гр.</li>
                                                                <li>Грецкий орех – 20 гр.</li>
                                                                <li>Соль и перец по вкусу, но не перебарщивайте с солью.
                                                                </li>
                                                            </ul>
                                                            Способ приготовления:
                                                            <p>Творог выложить в миску и размять его до однородной массы.
                                                                Помидоры и огурец нарезать кубиками и добавить к творогу.
                                                                Зелень мелко нарезать и добавить в салат.
                                                                Тыквенные семечки и грецкий орех измельчить и добавить в
                                                                салат.
                                                                Тщательно перемешать все ингредиенты, чтобы они равномерно
                                                                смешались.
                                                                Приправить солью и перцем по вкусу.
                                                                Дополнительные специи можно добавить на ваше усмотрение.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <!-- INfoblock -->



                                                </div>
                                            </div>
                                            <!-- trainblock -->

                                            <!-- trainblock -->
                                            <div class="card border-0 mb-3 shadow">
                                                <div class="card-body border-bottom">
                                                    <h5 class="card-title mb-0">3-й прием пищи</h5>
                                                </div>
                                                <div class="list-group list-group-flush">
                                                    <!-- INfoblock -->

                                                    <div class="list-group-item info-block b-0 py-2 text-decoration-none">
                                                        
                                                        <div>
                                                            Ингредиенты:
                                                            <ul>
                                                                <li>Творог 5% - 200 гр</li>
                                                                <li>Помидоры (средние) – 2-3 шт.</li>
                                                                <li>Зелень (укроп, кинза, базилик), можно всего понемногу
                                                                    или
                                                                    что-то одно – количество
                                                                    на
                                                                    ваше усмотрение.
                                                                </li>
                                                                <li>Огурец (средний) – 1 шт.</li>
                                                                <li>Тыквенные семечки – 10 гр.</li>
                                                                <li>Грецкий орех – 20 гр.</li>
                                                                <li>Соль и перец по вкусу, но не перебарщивайте с солью.
                                                                </li>
                                                            </ul>
                                                            Способ приготовления:
                                                            <p>Творог выложить в миску и размять его до однородной массы.
                                                                Помидоры и огурец нарезать кубиками и добавить к творогу.
                                                                Зелень мелко нарезать и добавить в салат.
                                                                Тыквенные семечки и грецкий орех измельчить и добавить в
                                                                салат.
                                                                Тщательно перемешать все ингредиенты, чтобы они равномерно
                                                                смешались.
                                                                Приправить солью и перцем по вкусу.
                                                                Дополнительные специи можно добавить на ваше усмотрение.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <!-- INfoblock -->



                                                </div>
                                            </div>
                                            <!-- trainblock -->

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
</main></template>