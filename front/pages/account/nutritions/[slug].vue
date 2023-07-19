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

                        <h1>Название программы питания</h1>
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
            <section class="page__desc">
                <div class="row">
                    <div class="col-lg-12 mx-auto">
                        <section class="faq py-3 py-md-5 mt-3 mt-md-5">
                            <div class="container py-3">
                                <div class="row">
                                    <div class="col-md-10 mx-auto">
                                        <h2 class="text-center mb-4">План питание №1</h2>
                                        <div class="accordion accordion-flush faq__accordion" id="accordionPlans">
                                            <div class="accordion-item">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="plans-collapseOne"
                                                    aria-expanded="false">
                                                    Понедельник
                                                </button>

                                                <div id="plans-collapseOne" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionPlans">
                                                    <div class="accordion-body">Placeholder content for this accordion,
                                                        which is intended to
                                                        demonstrate the <code>.accordion-plans</code> class. This is the
                                                        first item's accordion
                                                        body.</div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="plans-collapseTwo"
                                                    aria-expanded="false">
                                                    Вторник
                                                </button>
                                                <div id="plans-collapseTwo" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionPlans">
                                                    <div class="accordion-body">Placeholder content for this accordion,
                                                        which is intended to
                                                        demonstrate the <code>.accordion-plans</code> class. This is the
                                                        second item's accordion
                                                        body. Let's imagine this being filled with some actual content.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="plans-collapseThree"
                                                    aria-expanded="false">
                                                    Среда
                                                </button>
                                                <div id="plans-collapseThree" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionPlans">
                                                    <div class="accordion-body">Placeholder content for this accordion,
                                                        which is intended to
                                                        demonstrate the <code>.accordion-plans</code> class. This is the
                                                        third item's accordion
                                                        body. Nothing more exciting happening here in terms of content, but
                                                        just filling up the
                                                        space to make it look, at least at first glance, a bit more
                                                        representative of how this
                                                        would look in a real-world application.</div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="plans-collapseFour"
                                                    aria-expanded="false">
                                                    Четверг
                                                </button>
                                                <div id="plans-collapseFour" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionPlans">
                                                    <div class="accordion-body">Placeholder content for this accordion,
                                                        which is intended to
                                                        demonstrate the <code>.accordion-plans</code> class. This is the
                                                        third item's accordion
                                                        body. Nothing more exciting happening here in terms of content, but
                                                        just filling up the
                                                        space to make it look, at least at first glance, a bit more
                                                        representative of how this
                                                        would look in a real-world application.</div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="plans-collapseFive"
                                                    aria-expanded="false">
                                                    Пятница
                                                </button>
                                                <div id="plans-collapseFive" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionPlans">
                                                    <div class="accordion-body">Placeholder content for this accordion,
                                                        which is intended to
                                                        demonstrate the <code>.accordion-plans</code> class. This is the
                                                        third item's accordion
                                                        body. Nothing more exciting happening here in terms of content, but
                                                        just filling up the
                                                        space to make it look, at least at first glance, a bit more
                                                        representative of how this
                                                        would look in a real-world application.</div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="plans-collapseSix"
                                                    aria-expanded="false">
                                                    Суббота
                                                </button>
                                                <div id="plans-collapseSix" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionPlans">
                                                    <div class="accordion-body">Placeholder content for this accordion,
                                                        which is intended to
                                                        demonstrate the <code>.accordion-plans</code> class. This is the
                                                        third item's accordion
                                                        body. Nothing more exciting happening here in terms of content, but
                                                        just filling up the
                                                        space to make it look, at least at first glance, a bit more
                                                        representative of how this
                                                        would look in a real-world application.</div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <button class="accordion-button collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="plans-collapseSeven"
                                                    aria-expanded="false">
                                                    Воскресенье
                                                </button>
                                                <div id="plans-collapseSeven" class="accordion-collapse collapse"
                                                    data-bs-parent="#accordionPlans">
                                                    <div class="accordion-body">Placeholder content for this accordion,
                                                        which is intended to
                                                        demonstrate the <code>.accordion-plans</code> class. This is the
                                                        third item's accordion
                                                        body. Nothing more exciting happening here in terms of content, but
                                                        just filling up the
                                                        space to make it look, at least at first glance, a bit more
                                                        representative of how this
                                                        would look in a real-world application.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <h2>3 приёма пищи в день</h2>
                        <h2>План питания № 1</h2>
                        <div>
                            <h3>1-й ПРИЁМ ПИЩИ</h3>
                            Ингредиенты:
                            <ul>
                                <li>Творог 5% - 200 гр </li>
                                <li>Помидоры (средние) – 2-3 шт.</li>
                                <li>Зелень (укроп, кинза, базилик), можно всего понемногу или что-то одно – количество на
                                    ваше усмотрение.</li>
                                <li>Огурец (средний) – 1 шт.</li>
                                <li>Тыквенные семечки – 10 гр.</li>
                                <li>Грецкий орех – 20 гр.</li>
                                <li>Соль и перец по вкусу, но не перебарщивайте с солью.</li>
                            </ul>
                            Способ приготовления:
                            <p>Творог выложить в миску и размять его до однородной массы.
                                Помидоры и огурец нарезать кубиками и добавить к творогу.
                                Зелень мелко нарезать и добавить в салат.
                                Тыквенные семечки и грецкий орех измельчить и добавить в салат.
                                Тщательно перемешать все ингредиенты, чтобы они равномерно смешались.
                                Приправить солью и перцем по вкусу.
                                Дополнительные специи можно добавить на ваше усмотрение.
                            </p>

                    </div>



                </div>
            </div>
        </section>



    </div>
</main></template>