<template>
  <div class="content-container">
    <button @click="prev">&lt;</button>
    <div class="items-container">
      <div v-for="(imgSrc, index) in imgs" :key="index" class="item">
        <img :src="imgSrc" alt="item" />
        <p>lvl</p>
      </div>
    </div>
    <div class="item-container">
      <div class="title">
        <h2>Amos Bow</h2>
      </div>
      <div class="stats">
        <div>
          <p class="weapon-type">Bow</p>
          <span>ATK</span>
          <p class="sub-stat">49.6%</p>
          <span>Base ATK</span>
          <p class="main-stat">608</p>
          <p>*****</p>
        </div>
        <img :src="imgs[0]" />
      </div>
      <div class="passive">
        <div class="lvl">
          <span class="level">Lv. 90/90</span>
          <span class="stars">*****</span>
          <span class="lock">Lock</span>
        </div>
        <div class="refinment">
          <span class="r-lvl">2</span
          ><span class="r-text">Refinment Rank 2</span>
        </div>
        <div class="passive-description">
          <h4>Strong-Wiled</h4>
          <p>
            * Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
            diam ullamcorper, volutpat nulla at, maximus erat. Vivamus tellus
            tortor, varius eu suscipit at, fermentum convallis nibh. Suspendisse
            potenti. Sed at augue euismod, finibus lacus sit amet, venenatis
            velit. Sed rhoncus ornare rhoncus. Cras id nisl mattis, aliquet
            velit vel, auctor velit. Donec mi nunc, varius ut posuere non,
            commodo vel eros. Nullam luctus vulputate turpis, ultricies
            consequat justo lobortis vitae. In ultricies velit a nibh mattis
            sagittis. Vivamus id sapien ac dui pellentesque rhoncus vitae ac
            magna. Suspendisse fermentum dictum sem, vel lacinia augue bibendum
            vitae. Integer dapibus purus quis congue tempus. Etiam eu
            sollicitudin dolor, id pretium ligula. Fusce non ex vulputate justo
            finibus iaculis. Etiam porta ex augue, id laoreet nulla suscipit
            dictum. Sed ut sem a arcu vehicula condimentum. Sed faucibus euismod
            lectus ut dictum. Aenean quis libero sodales, consequat felis sit
            amet, volutpat diam. Etiam faucibus sed ligula sit amet bibendum.
            Pellentesque varius orci purus, ac efficitur metus auctor et. Nullam
            quis aliquet diam. Duis urna lorem, venenatis sed rhoncus eget,
            suscipit at ligula. Donec posuere justo leo, ut lacinia ligula
            dignissim et. Integer ac rutrum nibh. In ornare, nunc nec vulputate
            pulvinar, libero dolor gravida leo, eget sodales metus augue sed
            eros. Nullam volutpat est in congue finibus. Ut tincidunt mauris
            velit, porta feugiat dolor tristique sit amet. Vivamus metus leo,
            tincidunt id metus a, varius cursus enim. Mauris bibendum, massa at
            volutpat tristique, enim risus dapibus velit, eu hendrerit ipsum
            libero non ipsum. Quisque laoreet libero id justo rutrum interdum.
            In interdum elit eu est maximus, eu semper dolor bibendum. Morbi
            viverra est quis dolor congue tempus. Nullam a justo vitae leo
            suscipit finibus id in purus. Duis hendrerit justo auctor ipsum
            consequat, id ultricies metus tincidunt. In dapibus tortor at ipsum
            posuere eleifend eu ac nisl. Morbi et iaculis metus. Phasellus
            hendrerit, mi vitae maximus porttitor, erat tellus vulputate justo,
            ac varius ipsum urna in ante. Quisque vel aliquet nunc. Aliquam
            dapibus vel augue quis fringilla. Integer vel aliquam elit. Nam a
            elementum nunc. Quisque ac eros pharetra, tempor erat sed, congue
            augue. Morbi pellentesque sapien ac erat facilisis, eu eleifend enim
            facilisis. Integer neque elit, convallis ut metus quis, facilisis
            varius sem. Aliquam porttitor, risus a dictum aliquet, enim lectus
            rhoncus erat, at sodales ex elit et dui. Cras mattis varius nulla,
            eget vulputate tellus tempus vitae. Aliquam congue pellentesque
            orci. Curabitur ut neque eget velit mollis ullamcorper. Donec
            vestibulum lectus eu mi sollicitudin, non dignissim mi volutpat. Ut
            ac lacus in turpis condimentum dignissim. Quisque faucibus urna
            enim, et placerat libero tincidunt nec. Nam at justo sapien. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Nam blandit nisl
            libero, et luctus nunc dictum et. Phasellus in enim enim. Donec non
            aliquet lorem. Integer eu venenatis enim. Maecenas blandit erat eget
            nisl sodales dapibus. Vivamus rutrum erat a dui convallis, eu auctor
            nunc venenatis. Quisque et dapibus nisl. In eget lobortis sapien.
            Sed sit amet risus dui. Maecenas laoreet tincidunt justo at iaculis.
            Sed eleifend tortor ac lorem interdum tincidunt. Nulla pharetra
            cursus sapien, non porta ex auctor id. Etiam eleifend ultrices est.
            Donec tristique eu quam sed volutpat. Nunc rutrum pharetra massa, in
            interdum massa mollis sit amet. Curabitur tempor eu magna et
            viverra. Duis et vulputate ante. Sed pharetra lobortis libero eu
            facilisis. Aliquam accumsan dictum velit ut convallis. Vestibulum in
            auctor neque. Nunc consequat ultrices justo a dictum. Duis eleifend
            scelerisque diam, at ultricies elit ultrices ut. Nulla accumsan ante
            non urna accumsan, ac semper tortor scelerisque. Quisque ultricies
            nunc a pulvinar fringilla. Nam aliquet elit non neque fringilla
            porttitor. Vestibulum commodo rhoncus leo sed lobortis. Praesent eu
            est consectetur, dictum magna sed, sagittis metus. Cras eu eleifend
            ex. In hac habitasse platea dictumst. Morbi tristique, massa id
            varius vestibulum, ante est laoreet mi, sit amet laoreet mi ex sit
            amet eros. Vivamus quis venenatis purus. Maecenas in orci ultrices,
            fermentum tellus id, vehicula ante. Suspendisse potenti. Quisque
            tempus sem eu nunc iaculis, nec feugiat eros vehicula. Curabitur
            euismod est tellus, sed pellentesque velit ullamcorper eget. Sed
            quis nisl tempus est varius gravida quis vitae urna. Etiam feugiat
            nibh ac hendrerit faucibus. Morbi eu mauris sit amet nisi sodales
            laoreet nec vel nulla. Nam iaculis maximus ipsum, et aliquam risus
            fermentum non. Suspendisse non sem sit amet est faucibus sagittis.
            Aenean id ipsum ac felis lobortis eleifend suscipit at nunc. Fusce
            vitae leo dapibus, accumsan nibh id, viverra velit. Sed et tellus
            feugiat, dapibus risus nec, egestas velit. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Donec fringilla lectus mauris, vel vehicula purus lacinia
            et. Morbi eleifend, nunc vitae accumsan dictum, ipsum libero dapibus
            velit, vitae molestie arcu erat at lacus. Proin feugiat convallis
            dolor, suscipit cursus dui dapibus ut. Nullam aliquam ut sem id
            ultricies. Nulla rhoncus ut dui quis porttitor. Ut eget euismod
            metus, quis fringilla est. Pellentesque commodo ante nibh, et
            aliquet orci bibendum nec. Nulla sit amet ipsum eget risus congue
            placerat ac id dolor. Vivamus sed urna ultricies, elementum augue
            congue, egestas ante. Donec vel lorem quis dolor rhoncus lobortis.
            Phasellus efficitur metus non arcu tempor, vitae sollicitudin metus
            malesuada. Cras ac erat sed nisl dictum commodo sed ac erat.
            Pellentesque ut volutpat enim. Morbi tempor porta laoreet. Maecenas
            non dolor diam. Duis hendrerit risus ultrices, ornare justo ut,
            mollis sapien. Integer gravida dui orci, rhoncus tempor dui iaculis
            nec. Praesent pellentesque suscipit elementum. Curabitur in molestie
            orci. Fusce vitae suscipit urna, pellentesque ultrices diam. Donec
            blandit enim quam, a fermentum leo tempus id. Curabitur semper leo a
            orci consequat finibus. Aliquam fermentum in mi non vehicula. Sed
            sed metus sit amet purus vestibulum tincidunt a non urna. Nulla
            dictum nisi dui, vitae suscipit urna facilisis et.
          </p>
          <p class="additional-description">Adittional description....</p>
        </div>
      </div>
    </div>
    <button @click="next">></button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CategoryContent',
  data() {
    return {
      imgs: [
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
        'https://api.genshin.dev/characters/albedo/icon',
      ],
    }
  },
  computed: {
    ...mapGetters('Inventory', ['getCategory'])
  },
  methods: {
    next(){
      this.$store.commit('Inventory/nextCategory')
    },
    prev(){
      this.$store.commit('Inventory/prevCategory')
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 100%;
  margin-top: 15px;
  button {
    width: 20px;
    height: 100%;
  }
  .items-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 830px;
    height: 85vh;
    overflow-y: scroll;
    margin-left: 20px;
    .item {
      border-radius: 5px;
      transition: 0.3s;
      background: white;
      width: fit-content;
      cursor: pointer;
      height: fit-content;
      img {
        width: 100px;
        height: 100px;
        -webkit-user-drag: none;

        border-radius: 4px;
        border-bottom-right-radius: 25px;
        background-color: #a3702e;
        user-select: none;
      }
      p {
        width: 100%;
        font-weight: 600;
        color: black;
        text-align: center;
        user-select: none;
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .item-container {
    width: 400px;
    height: 85vh;
    background: #eae0d4;
    border-radius: 5px;
    .title {
      background: #bc6a32;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      padding: 8px;
      width: 100%;
      h2 {
        margin-left: 10px;
      }
    }
    .stats {
      display: flex;
      width: 100%;
      height: 22%;
      justify-content: space-between;
      background: rgb(113, 85, 82);
      background: linear-gradient(
        90deg,
        rgba(113, 85, 82, 1) 0%,
        rgba(228, 172, 87, 1) 100%
      );
      img {
        width: 180px;
        height: 100%;
      }
      div {
        padding: 15px;
        margin-left: 15px;
        p {
          font-weight: 600;
        }
        span {
          font-weight: 600;
          font-size: 15px;
          color: #9e8984;
        }
        .weapon-type {
          font-size: 19px;
        }
        .sub-stat {
          font-size: 21px;
        }
        .main-stat {
          font-weight: 800;
          font-size: 40px;
        }
      }
    }
    .passive {
      display: flex;
      flex-direction: column;
      gap: 5px;
      height: 70%;
      .lvl {
        display: flex;
        margin: 15px 15px 0px 15px;
        justify-content: space-between;
        align-items: center;
        .level,
        .lock {
          padding: 5px 6px;
          font-weight: 600;
          border-radius: 4px;
          background: #3f4953;
        }
        .stars {
          font-size: 30px;
        }
      }
    }
    .refinment {
      display: flex;
      margin: 15px;
      align-items: center;

      .r-text {
        margin-left: 5px;
        font-size: 23px;
        font-weight: 600;
        color: #d3b979;
      }
      .r-lvl {
        background: #635e58;
        font-weight: 600;
        color: #c7c7c7;
        font-size: 23px;
        padding: 2px 7px;
      }
    }
    .passive-description {
      height: 100%;
      overflow-y: scroll;
      margin: 0px 15px;
      h4,
      p {
        font-weight: 600;
        font-size: 20px;
        color: #5c5e6d;
      }
      p {
        margin-left: 5px;
      }
      .additional-description {
        color: #818181;
        margin-left: 0;
        margin-top: 10px;
      }
    }
  }
}
@media only screen and (max-width: 930px) {
  .content-container {
    .items-container {
      gap: 10px;
      width: 100%;
      height: 90vh;
      .item {
        img {
          width: 80px;
          height: 80px;
        }
      }
    }
    .item-container {
      display: none;
    }
  }
}
</style>