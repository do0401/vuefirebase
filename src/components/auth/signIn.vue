<template>
  <v-card color="transparent" height="500" flat>
    <v-form v-model="valid" ref="form" lazy-validation>
      <v-card-title primary-title>
        <span class="title">
          로그인
        </span>
        <v-spacer></v-spacer>
        <span class="caption">
          또는
          <a>회원가입</a>
        </span>
      </v-card-title>
      <v-card-actions>
        <v-btn color="primary" block>
          <v-icon>mdi-google</v-icon>
          <v-divider vertical class="mx-3"></v-divider>
          Google 계정으로 로그인
        </v-btn>
      </v-card-actions>
      <v-container grid-list-md fluid>
        <v-layout row wrap>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
          <v-flex xs2>
            또는
          </v-flex>
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text>
        <v-text-field
          label="이메일"
        ></v-text-field>
        <v-text-field
          label="비밀번호"
        ></v-text-field>
        <div class="recaptcha-term-text">
          이 페이지는 reCAPTCHA로 보호되며, Google 개인정보처리방침 및 서비스 약관의 적용을 받습니다.
        </div>
      </v-card-text>
    <v-card-actions>
      <v-checkbox
        label="로그인 정보저장"
      >
      </v-checkbox>
      <v-spacer></v-spacer>
      <v-btn color="primary">로그인</v-btn>
    </v-card-actions>
    </v-form>
  </v-card>
</template>
<style scoped>
.recaptcha-term-text {
  font-size: 12px;
  font-weight: 200;
  color: #637282;
}
</style>
