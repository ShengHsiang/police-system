<template>
  <div class="result-wrapper" @click="handleClickResult">
    <div class="result-avatar-wrapper">
      <img :src="data.avatar" />
    </div>
    <div class="result-content-wrapper">
      <ul>
        <li>
          <div class="label">姓名</div>
          <div class="content">{{ data.name }}</div>
        </li>
        <li>
          <div class="label">身分證</div>
          <div class="content">{{ data.id }}</div>
        </li>
        <li>
          <div class="label">出生年月日</div>
          <div class="content">{{ data.birthday }}</div>
        </li>
        <li>
          <div class="label">聯絡電話</div>
          <div class="content">{{ data.phone }}</div>
        </li>
        <li>
          <div class="label">現居地址</div>
          <div class="content">{{ data.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SystemResult",
  props: {
    data: {
      type: Object,
      default() {
        return {
          name: "林靜",
          id: "A225605577",
          birthday: "1983 / 11 / 02",
          phone: "0963695045",
          address: "中央市南區青武三路204號二樓",
        };
      },
    },
  },
  methods: {
    handleClickResult () {
      this.$router.push({
        name: 'PersonInfomation',
        params: {
          id: this.data.id
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
$main-color: #33649b;
$hover-color: #69B0FF;

.result-wrapper {
  width: 727px;
  min-height: 175px;
  border: 4px solid $main-color;
  border-radius: 2px;
  margin-bottom: 24px;
  position: relative;
  display: flex;

  &::after {
    content: "";
    position: absolute;
    top: -21px;
    left: -3px;

    /* 設定 width、height 可更好理解原理 */
    height: 9px;
    width: 218px;

    border-color: transparent transparent $main-color transparent;
    border-style: solid solid solid solid;
    border-radius: 2px;
    border-width: 9px;
  }

  &:hover {
    border-color: $hover-color;
    cursor: pointer;
  }

  &:hover::after {
    border-color: transparent transparent $hover-color transparent;
  }
}

.result-avatar-wrapper {
  width: 138px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }
}

.result-content-wrapper {
  flex-grow: 1;
  border-left: 4px solid $main-color;

  li {
    display: flex;
    height: 35px;
    border-bottom: 2px solid $main-color;
    font-size: 14px;
    letter-spacing: 0.05em;

    &:last-child {
      border-bottom: none;
    }

    .label {
      width: 105px;
      color: #ffffff;
      border-right: 2px solid $main-color;
      font-weight: 400;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content {
      padding: 0 8px;
      color: #73abe9;
      font-weight: 500;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>