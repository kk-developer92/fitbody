<template>
	<!-- Navbar -->
	<nav id="main-navbar " class="navbar navbar-expand-lg navbar-light bg-dark pt-2">
		<!-- Container wrapper -->
		<div class="container-fluid">
			<!-- Toggle button -->
			<button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
				data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
					class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
					<path
						d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
				</svg>
			</button>

			<!-- Collapsible wrapper -->
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<!-- Navbar brand -->
				<nuxt-link class="navbar-brand mt-2 mt-lg-0 bg-light" to="/">
					<img src="@/assets/appImages/logo.png" height="47" alt="MDB Logo" loading="lazy" />
				</nuxt-link>
				<!-- Left links -->
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<nuxt-link class="nav-link" href="/account">Главная</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" href="/results">Результаты</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link class="nav-link" href="/">Еще что-то</nuxt-link>
					</li>
				</ul>
				<!-- Left links -->
			</div>
			<!-- Collapsible wrapper -->

			<!-- Right elements -->
			<div class="d-flex align-items-center">

				<!-- Avatar -->
				<div class="dropdown">
					<a class="dropdown-toggle d-flex align-items-center hidden-arrow" href="#" id="navbarDropdownMenuAvatar"
						role="button" data-bs-toggle="dropdown" aria-expanded="false">
						<img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" height="25"
							alt="Black and White Portrait of a Man" loading="lazy" />
					</a>
					<ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
						<li>
							<a class="dropdown-item" href="#">My profile</a>
						</li>
						<li>
							<a class="dropdown-item" href="#">Settings</a>
						</li>
						<li>
							<a class="dropdown-item" href="#">Logout</a>
						</li>
					</ul>
				</div>
			</div>
			<!-- Right elements -->
		</div>
		<!-- Container wrapper -->
	</nav>
	<!-- Navbar -->

	<div class="training__programs">
		<div class="container">
			<h1 class="mb-5">Мои покупки</h1>
			<div class="gy-4">
				<div v-if="!all.length">
					<h1 style="text-align: center; font-size: 24px;">У вас пока ничего нет 😢</h1>
				</div>
				<div v-else class="row gy-4">
					<div class="row gy-4" v-if="user.trainings?.length">
						<h1 style="font-size: 24px;">Тренировки</h1>
						<div v-for="training in user.trainings" class="col-6 col-md-4 cursor-pointer">
							<nuxt-link :to="`/trainings/${training._id}`" class="service">
								<nuxt-img class="img-fluid" format="webp"
									:src="training.image || '/_nuxt/assets/img/services/service_man.jpg'"
									sizes="sm:100vw md:100vw lg:400px" />

								<div class="service__wrapper">
									<div>
										<h3 class="service__title">{{ training.title }}</h3>
									</div>
									<svg class="align-self-end" width="30" height="30" viewBox="0 0 30 30" fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<circle cx="15" cy="15" r="15" fill="#F52626" />
										<path d="M13 9L19 15L13 21" stroke="white" stroke-width="2"
											stroke-linejoin="round" />
									</svg>
								</div>
							</nuxt-link>
						</div>
					</div>
					<div class="row gy-4" v-if="user.nutrition?.length">
						<h1 style="font-size: 24px;">Питание</h1>
						<tab-block v-for="data in user.nutrition" route="nutrition" :section="data"></tab-block>
					</div>
					<div class="row gy-4" v-if="user.courses?.length">
						<h1 style="font-size: 24px;">Курсы</h1>
						<tab-block v-for="courses in user.courses" route="courses" :section="courses"></tab-block>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import TabBlock from '~/components/common/TabBlock.vue';

definePageMeta({
	authRoute: true,
	middleware: 'auth'
});


let storage: any = '';
const user: any = ref({});
const all: any = ref([]);

onMounted(() => {
	storage = localStorage.getItem('user');

	user.value = JSON.parse(storage) || {};

	all.value = [...user.value.trainings, ...user.value.nutrition, ...user.value.courses];
});

</script>

<style scoped></style>