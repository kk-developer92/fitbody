<template>
  <main class="page">
    <section class="promo page__promo py-3 py-md-5">
      <div class="container py-3">
        <div class="promo__wrapper row align-items-center">
          <div class="promo__image col-lg-5 col-xl-5 order-lg-last text-lg-end">
            <img :src="'https://fitseven.ru/wp-content/uploads/2019/07/pitanie-pri-trenirovkah-na-massu.jpg'" alt="">
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
                <div class="row justify-content-center">
                  <div class="col-md-10">
                    <div class="list-group list-group-flush">


                      <div class="card border-0 mb-3 shadow">
                        <div class="card-body border-bottom">
                          <small class="font-weight-bold text-muted mb-0">Часть 1 - 7 тренировок</small>
                          <h5 class="card-title mb-0">Неделя 1</h5>
                        </div>
                        <div class="list-group">
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6915">
                            <div>
                              <small class="text-muted mb-0">тренировка</small>
                              <h6 class="mb-0"> День 1 Плечи &amp; Трицепсы </h6>
                            </div>

                            <span class="text-success"><input type="checkbox" name="" id=""></span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6918">
                            <div>
                              <small class="text-muted mb-0">тренировка</small>
                              <h6 class="mb-0"> Day 2 Abs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6916">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 3 Back &amp; Biceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6917">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 4 Legs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 5 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6919">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 6 Shoulders </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 7 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                        </div>
                      </div>


                      <div class="card border-0 mb-3 shadow">
                        <div class="card-body border-bottom">
                          <small class="font-weight-bold text-muted mb-0">Part 2 - 7 workouts</small>
                          <h5 class="card-title mb-0">Week 2</h5>
                        </div>
                        <div class="list-group">
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6954">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 8 Chest &amp; Triceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6955">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 9 Abs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6956">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 10 Back &amp; Biceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6957">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 11 Legs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 12 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6959">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 13 Shoulders </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 14 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                        </div>
                      </div>
                      <div class="card border-0 mb-3 shadow">
                        <div class="card-body border-bottom">
                          <small class="font-weight-bold text-muted mb-0">Part 3 - 7 workouts</small>
                          <h5 class="card-title mb-0">Week 3</h5>
                        </div>
                        <div class="list-group">
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6961">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 15 Chest &amp; Triceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6962">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 16 Abs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6963">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 17 Back &amp; Biceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6964">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 18 Legs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 19 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6966">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 20 Shoulders </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 21 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                        </div>
                      </div>
                      <div class="card border-0 mb-3 shadow">
                        <div class="card-body border-bottom">
                          <small class="font-weight-bold text-muted mb-0">Part 4 - 7 workouts</small>
                          <h5 class="card-title mb-0">Week 4</h5>
                        </div>
                        <div class="list-group">
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6968">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 22 Chest &amp; Triceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6969">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 23 Abs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6970">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 24 Back &amp; Biceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6971">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 25 Legs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 26 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6973">
                            <div>
                              <small class="text-muted mb-0">workout</small>
                              <h6 class="mb-0"> Day 27 Shoulders </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 28 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                        </div>
                      </div>
                      <div class="card border-0 mb-3 shadow">
                        <div class="card-body border-bottom">
                          <small class="font-weight-bold text-muted mb-0">Part 5 - 7 workouts</small>
                          <h5 class="card-title mb-0">Week 5 (Challenge)</h5>
                        </div>
                        <div class="list-group">
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6946">
                            <div>
                              <small class="text-muted mb-0">challenge</small>
                              <h6 class="mb-0"> Day 29 Chest &amp; Triceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6947">
                            <div>
                              <small class="text-muted mb-0">challenge</small>
                              <h6 class="mb-0"> Day 30 Abs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6948">
                            <div>
                              <small class="text-muted mb-0">challenge</small>
                              <h6 class="mb-0"> Day 31 Back &amp; Biceps </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6949">
                            <div>
                              <small class="text-muted mb-0">challenge</small>
                              <h6 class="mb-0"> Day 32 Legs </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 33 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

                          </div>

                          <nuxt-link class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                            to="/account/trainings/6951">
                            <div>
                              <small class="text-muted mb-0">challenge</small>
                              <h6 class="mb-0"> Day 34 Shoulders </h6>
                            </div>

                            <span class="text-danger">Premium</span>

                          </nuxt-link>
                          <div
                            class="list-group-item list-group-item-action d-flex justify-content-between align-items.center">
                            <div>
                              <small class="text-muted mb-0">rest</small>
                              <h6 class="mb-0"> Day 35 Rest </h6>
                            </div>

                            <span class="text-success">Free</span>

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



    </div>
  </main>
</template>