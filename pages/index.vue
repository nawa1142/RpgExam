<template>
    <header>
        <navbar :currentPath="$route.path" />
    </header>
    <div class="container text-center mt-2 mb-3">
        <div class="row m-0 p-0">
            <div class="col-md-12 col-lg-8">
                <div class="w-100 h-100">
                    <iframe height="100%" width="100%"
                        src="https://www.youtube.com/embed/qLZenOn7WUo?si=fNGbHaebPlF90H6-" title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                        allowfullscreen></iframe>
                </div>
            </div>
            <div class="col-md-12 col-lg-4">
                <div class="d-flex flex-column justify-content-around h-100">
                    <div class="p-2 rounded mb-2 shadow-lg">
                        <div id="EventBannerCarousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#EventBannerCarousel" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#EventBannerCarousel" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#EventBannerCarousel" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <nuxt-link to="events">
                                        <img src="/image/events/1.jpg" class="d-block w-100" alt="...">
                                    </nuxt-link>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <nuxt-link to="events">
                                        <img src="/image/events/2.jpg" class="d-block w-100" alt="...">
                                    </nuxt-link>
                                </div>
                                <div class="carousel-item">
                                    <nuxt-link to="events">
                                        <img src="/image/events/3.jpg" class="d-block w-100" alt="...">
                                    </nuxt-link>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#EventBannerCarousel"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#EventBannerCarousel"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            <div
                                class="z-1 position-absolute top-0 p-1 rounded-3 text-danger-emphasis bg-danger-subtle">
                                <span>Events</span>
                            </div>
                        </div>
                    </div>
                    <div class="p-2 rounded shadow-lg">
                        <div id="NoticeBannerCarousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#NoticeBannerCarousel" data-bs-slide-to="0"
                                    class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#NoticeBannerCarousel" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#NoticeBannerCarousel" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="10000">
                                    <nuxt-link to="notice">
                                        <img src="/image/notice/1.jpg" class="d-block w-100">
                                    </nuxt-link>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <nuxt-link to="notice">
                                        <img src="/image/notice/2.jpg" class="d-block w-100">
                                    </nuxt-link>
                                </div>
                                <div class="carousel-item">
                                    <nuxt-link to="notice">
                                        <img src="/image/notice/3.jpg" class="d-block w-100">
                                    </nuxt-link>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#NoticeBannerCarousel"
                                data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#NoticeBannerCarousel"
                                data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                            <div
                                class="z-1 position-absolute top-0 p-1 rounded-3 text-danger-emphasis bg-danger-subtle">
                                <span>Notice</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section>
        <footerbar />
    </section>
</template>

<script setup>

const $route = useRoute();

useHead({
    title: "Sword and Staft",
});
</script>

<style scoped>
footer {
    margin: 0;
    padding: 0;
    border: none;
    bottom: 0;
    width: 100%;
    z-index: 1000;
}
</style>