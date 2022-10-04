<template>
  <div>
    <main class="main__content_wrapper">
      <!-- Start breadcrumb section -->
      <BreadcrumbPage title="Shop" />
      <!-- End breadcrumb section -->

      <!-- Start shop section -->
      <section class="shop__section section--padding">
        <div class="container-fluid">
          <!-- <div class="float-end">
                <button class="btn btn-primary pull-right">Right</button>
            </div> -->
          <div class="shop__header text-right mb-40">
            <button class="widget__filter--btn d-lg-none" data-offcanvas>
              <svg class="widget__filter--btn__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="28"
                  d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80" />
                <circle cx="336" cy="128" r="28" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="28" />
                <circle cx="176" cy="256" r="28" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="28" />
                <circle cx="336" cy="384" r="28" fill="none" stroke="currentColor" stroke-linecap="round"
                  stroke-linejoin="round" stroke-width="28" />
              </svg>
              <span class="widget__filter--btn__text">Filter</span>
            </button>
            <div class="product__view--mode text-right">
              <div class="product__view--mode__list float-end mr-5">
                <div class="
                    product__grid--column__buttons
                    d-flex
                    justify-content-center
                  ">
                  <button class="product__grid--column__buttons--icons active" aria-label="product grid button"
                    data-toggle="tab" data-target="#product_grid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 9 9">
                      <g transform="translate(-1360 -479)">
                        <rect id="Rectangle_5725" data-name="Rectangle 5725" width="4" height="4"
                          transform="translate(1360 479)" fill="currentColor" />
                        <rect id="Rectangle_5727" data-name="Rectangle 5727" width="4" height="4"
                          transform="translate(1360 484)" fill="currentColor" />
                        <rect id="Rectangle_5726" data-name="Rectangle 5726" width="4" height="4"
                          transform="translate(1365 479)" fill="currentColor" />
                        <rect id="Rectangle_5728" data-name="Rectangle 5728" width="4" height="4"
                          transform="translate(1365 484)" fill="currentColor" />
                      </g>
                    </svg>
                  </button>
                  <button class="product__grid--column__buttons--icons" aria-label="product list button"
                    data-toggle="tab" data-target="#product_list">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 13 8">
                      <g id="Group_14700" data-name="Group 14700" transform="translate(-1376 -478)">
                        <g transform="translate(12 -2)">
                          <g id="Group_1326" data-name="Group 1326">
                            <rect id="Rectangle_5729" data-name="Rectangle 5729" width="3" height="2"
                              transform="translate(1364 483)" fill="currentColor" />
                            <rect id="Rectangle_5730" data-name="Rectangle 5730" width="9" height="2"
                              transform="translate(1368 483)" fill="currentColor" />
                          </g>
                          <g id="Group_1328" data-name="Group 1328" transform="translate(0 -3)">
                            <rect id="Rectangle_5729-2" data-name="Rectangle 5729" width="3" height="2"
                              transform="translate(1364 483)" fill="currentColor" />
                            <rect id="Rectangle_5730-2" data-name="Rectangle 5730" width="9" height="2"
                              transform="translate(1368 483)" fill="currentColor" />
                          </g>
                          <g id="Group_1327" data-name="Group 1327" transform="translate(0 -1)">
                            <rect id="Rectangle_5731" data-name="Rectangle 5731" width="3" height="2"
                              transform="translate(1364 487)" fill="currentColor" />
                            <rect id="Rectangle_5732" data-name="Rectangle 5732" width="9" height="2"
                              transform="translate(1368 487)" fill="currentColor" />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="
                  product__view--mode__list product__view--search
                  d-none d-lg-block
                ">
                <div style="margin-right: 20px" class="product__view--search__form float-end">
                  <label>
                    <input @keyup="searchName()" class="product__view--search__input border-1" v-model="namesearch"
                      placeholder="Search by name" type="text" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-4">
              <!--Start Silder bar -->
              <div class="shop__sidebar--widget widget__area d-none d-lg-block">
                <div class="single__widget widget__bg">
                  <h2 class="widget__title h3">Categories</h2>
                  <ul class="widget__categories--menu  " >
                    <li class="widget__categories--menu__list "  v-for="pr in parent" :key="pr.id">
                      <label data-bs-toggle="dropdown" class="
                          widget__categories--menu__label
                          d-flex
                          align-items-center
                        ">
                        <img class="widget__categories--menu__img" src="/img/product/icategory.jpg"
                          alt="categories-img" />
                        <span class="widget__categories--menu__text">{{
                        pr.name
                        }}</span>
                        <svg class="widget__categories--menu__arrowdown--icon" xmlns="http://www.w3.org/2000/svg"
                          width="12.355" height="8.394">
                          <path d="M15.138,8.59l-3.961,3.952L7.217,8.59,6,9.807l5.178,5.178,5.178-5.178Z"
                            transform="translate(-6 -8.59)" fill="currentColor"></path>
                        </svg>
                      </label>
                      <ul class="widget__categories--sub__menu  " v-if="pr.child_count > 0">
                        <div v-for="cat in Categories" :key="cat.id">
                          <li class="widget__categories--sub__menu--list " v-if="cat.parent_id == pr.id">
                            <a @click="filterCate(cat.id)" class="
                                widget__categories--sub__menu--link
                                d-flex
                                align-items-center
                              " href="#">
                              <img class="widget__categories--sub__menu--img" src="/img/product/arrow.jpg"
                                alt="categories-img" />
                              <span class="widget__categories--sub__menu--text">{{ cat.name }}</span>
                            </a>
                          </li>
                        </div>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div class="single__widget widget__bg">
                  <h2 class="widget__title h3">New Products</h2>
                  <div class="product__grid--inner">
                    <div class="
                        product__items product__items--grid
                        d-flex
                        align-items-center
                      " v-for="newPro in newProducts" :key="newPro.id">
                      <div class="
                          product__items--grid__thumbnail
                          position__relative
                        ">
                        <a class="product__items--link" :href="'product-detail/' + newPro.id">
                          <img class="product__items--img product__primary--img" :src="newPro.image_path"
                            alt="product-img" />
                          <img class="product__items--img product__secondary--img" :src="newPro.image_path"
                            alt="product-img" />
                        </a>
                      </div>
                      <div class="product__items--grid__content">
                        <h3 class="product__items--content__title h4">
                          <a :href="'product-detail/' + newPro.id">{{
                          newPro.name
                          }}</a>
                        </h3>
                        <div class="product__items--price">
                          <span class="current__price">${{ newPro.sale_price }}</span>
                          <span class="price__divided"></span>
                          <span class="old__price">${{ newPro.price }}</span>
                        </div>
                        <ul class="rating product__rating d-flex">
                          <li class="rating__list">
                            <span class="rating__list--icon">
                              <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105"
                                height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li class="rating__list">
                            <span class="rating__list--icon">
                              <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105"
                                height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li class="rating__list">
                            <span class="rating__list--icon">
                              <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105"
                                height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li class="rating__list">
                            <span class="rating__list--icon">
                              <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105"
                                height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                          <li class="rating__list">
                            <span class="rating__list--icon">
                              <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg" width="14.105"
                                height="14.732" viewBox="0 0 10.105 9.732">
                                <path data-name="star - Copy"
                                  d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                  transform="translate(0 -0.018)" fill="currentColor"></path>
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="single__widget widget__bg">
                  <h2 class="widget__title h3">Tags</h2>
                  <ul class="widget__tagcloud">
                    <li class="widget__tagcloud--list" v-for="tag in Tags" :key="tag.id">
                      <a class="widget__tagcloud--link" href="#">{{
                      tag.name
                      }}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <!--End Silder bar -->
            </div>
            <div class="col-xl-9 col-lg-8">
              <div class="shop__product--wrapper">
                <div class="tab_content">
                  <div id="product_grid" class="tab_pane active show">
                    <div class="product__section--inner product__grid--inner">
                      <div class="
                          row
                          row-cols-xl-5
                          row-cols-lg-4
                          row-cols-md-3
                          row-cols-2
                          mb--n30
                        ">
                        <div class="col mb-30" v-for="pro in filterName" :key="pro.id">
                          <div class="product__items">
                            <div class="product__items--thumbnail">
                              <a class="product__items--link" :href="'product-detail/' + pro.id">
                                <img class="
                                    product__items--img product__primary--img
                                  " :src="pro.image_path" alt="product-img" />
                              </a>
                              <div class="product__badge">
                                <span class="product__badge--items sale">Sale</span>
                              </div>
                              <a class="product__add-to__cart--btn__style2" :href="'product-detail/' + pro.id">
                                <svg class="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"
                                  width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                  <g transform="translate(0 0)">
                                    <g>
                                      <path data-name="Path 16787"
                                        d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                        transform="translate(0 -463.248)" fill="currentColor"></path>
                                      <path data-name="Path 16788"
                                        d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                        transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                                      <path data-name="Path 16789"
                                        d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                        transform="translate(-2.875 -466.622)" fill="currentColor"></path>
                                    </g>
                                  </g>
                                </svg>
                                <span class="add__to--cart__text">
                                  + Add to cart</span>
                              </a>
                            </div>
                            <div class="product__items--content text-center">
                              <span class="product__items--content__subtitle">{{
                              pro.category
                              }}</span>
                              <h3 class="product__items--content__title h4">
                                <a :href="'product-detail/' + pro.id">{{
                                pro.name
                                }}</a>
                              </h3>
                              <div class="product__items--price">
                                <span class="current__price">
                                  ${{ pro.sale_price }}
                                </span>
                                <span class="price__divided"></span>
                                <span class="old__price">${{ pro.price }}
                                </span>
                              </div>
                              <ul class="
                                  rating
                                  product__rating
                                  d-flex
                                  justify-content-center
                                ">
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="product_list" class="tab_pane">
                    <div class="product__section--inner">
                      <div class="row row-cols-1 mb--n30">
                        <div class="col mb-30" v-for="pro in filterName" :key="pro.id">
                          <div class="product__items product__list--items d-flex">
                            <div class="
                                product__items--thumbnail
                                product__list--items__thumbnail
                              ">
                              <a class="product__items--link" :href="'product-detail/' + pro.id">
                                <img class="
                                    product__items--img product__primary--img
                                  " :src="pro.image_path" alt="product-img" />
                                <img class="
                                    product__items--img product__secondary--img
                                  " :src="pro.image_path" alt="product-img" />
                              </a>
                              <div class="product__badge">
                                <span class="product__badge--items sale">Sale</span>
                              </div>
                            </div>
                            <div class="product__list--items__content">
                              <span class="product__items--content__subtitle mb-5">{{ pro.category }}</span>
                              <h3 class="
                                  product__list--items__content--title
                                  h4
                                  mb-10
                                ">
                                <a :href="'product-detail/' + pro.id">{{
                                pro.name
                                }}</a>
                              </h3>
                              <div class="product__list--items__price mb-10">
                                <span class="current__price">{{
                                pro.sale_price
                                }}</span>
                                <span class="price__divided"></span>
                                <span class="old__price">{{ pro.price }}</span>
                              </div>
                              <ul class="rating product__rating d-flex">
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                                <li class="rating__list">
                                  <span class="rating__list--icon">
                                    <svg class="rating__list--icon__svg" xmlns="http://www.w3.org/2000/svg"
                                      width="14.105" height="14.732" viewBox="0 0 10.105 9.732">
                                      <path data-name="star - Copy"
                                        d="M9.837,3.5,6.73,3.039,5.338.179a.335.335,0,0,0-.571,0L3.375,3.039.268,3.5a.3.3,0,0,0-.178.514L2.347,6.242,1.813,9.4a.314.314,0,0,0,.464.316L5.052,8.232,7.827,9.712A.314.314,0,0,0,8.292,9.4L7.758,6.242l2.257-2.231A.3.3,0,0,0,9.837,3.5Z"
                                        transform="translate(0 -0.018)" fill="currentColor"></path>
                                    </svg>
                                  </span>
                                </li>
                              </ul>
                              <p v-html="pro.content" class="
                                  product__list--items__content--desc
                                  d-none d-xl-block
                                  mb-15
                                "></p>
                              <ul class="product__items--action d-flex">
                                <li class="product__items--action__list">
                                  <a class="
                                      product__items--action__btn
                                      add__to--cart
                                    " :href="'product-detail/' + pro.id">
                                    <svg class="product__items--action__btn--svg" xmlns="http://www.w3.org/2000/svg"
                                      width="22.51" height="20.443" viewBox="0 0 14.706 13.534">
                                      <g transform="translate(0 0)">
                                        <g>
                                          <path data-name="Path 16787"
                                            d="M4.738,472.271h7.814a.434.434,0,0,0,.414-.328l1.723-6.316a.466.466,0,0,0-.071-.4.424.424,0,0,0-.344-.179H3.745L3.437,463.6a.435.435,0,0,0-.421-.353H.431a.451.451,0,0,0,0,.9h2.24c.054.257,1.474,6.946,1.555,7.33a1.36,1.36,0,0,0-.779,1.242,1.326,1.326,0,0,0,1.293,1.354h7.812a.452.452,0,0,0,0-.9H4.74a.451.451,0,0,1,0-.9Zm8.966-6.317-1.477,5.414H5.085l-1.149-5.414Z"
                                            transform="translate(0 -463.248)" fill="currentColor"></path>
                                          <path data-name="Path 16788"
                                            d="M5.5,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,5.5,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,6.793,478.352Z"
                                            transform="translate(-1.191 -466.622)" fill="currentColor"></path>
                                          <path data-name="Path 16789"
                                            d="M13.273,478.8a1.294,1.294,0,1,0,1.293-1.353A1.325,1.325,0,0,0,13.273,478.8Zm1.293-.451a.452.452,0,1,1-.431.451A.442.442,0,0,1,14.566,478.352Z"
                                            transform="translate(-2.875 -466.622)" fill="currentColor"></path>
                                        </g>
                                      </g>
                                    </svg>
                                    <span class="add__to--cart__text">
                                      + Add to cart</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
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
      <!-- End shop section -->

      <!-- Start shipping section -->
      <shipping-component />
      <!-- End shipping section -->
    </main>
  </div>
</template>

<script>
import axios from "axios";
import ShippingComponent from "./includes/Shipping.vue";
import BreadcrumbPage from "./includes/BreadcrumbPage.vue";

export default {
  name: "ProductComponent",
  components: {
    ShippingComponent,
    BreadcrumbPage,
  },
  data() {
    return {
      Products: [],
      namesearch: "",
      filtername: "",
      Categories: [],
      parent: [],
      newProducts: [],
      Tags: [],
    };
  },
  filters: {
    toLowerCase(namesearch) {
      return namesearch.toLowerCase();
    },
  },
  async mounted() {
    let res = await axios.get("categories");
    this.Categories = res.data;
    this.parent = res.data.filter(function (u) {
      return u.parent_id == "0";
    });
    let res2 = await axios.get("tags");
    this.Tags = res2.data;
    let res3 = await axios.get("products/newProduct/5");
    this.newProducts = res3.data;
    let res4 = await axios.get("products");
    this.Products = res4.data;
  },
  async created() { },
  computed: {
    filterName() {
      return this.Products.filter((pro) => {
        return pro.name.toLowerCase().match(this.filtername);
      });
    },
  },
  methods: {
    searchName() {
      this.filtername = this.namesearch.toLowerCase();
    },
    async filterCate(id) {
      let res4 = await axios.get("products");
      this.Products = res4.data;
      console.log(id);
      this.Products = this.Products.filter((pro) => {
        return pro.category_id === id;
      });
    },
  },
};
</script>
