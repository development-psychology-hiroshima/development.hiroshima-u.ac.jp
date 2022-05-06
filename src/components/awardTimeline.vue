<template>
  <div v-for="awardYear in timeline">
    <h2 class="title-award-year">{{ awardYear.year }}年</h2>

    <div v-for="award in awardYear.awards">
      <ul class="award-text">
        <li>
          <span>{{ award.text }}</span>
          <span v-if="award.url" v-html="getUrlStruct(award.url)"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "AwardTimeline",
  methods: {
    getUrlStruct: (url) =>
      `<a class="award-info-link" target="_blank" href="${url}">詳しい情報はこちらです。</a>`,
  },
  setup() {
    const rawTimeline = inject("config").awards;
    // {
    //   "year": 2021,
    //   "awards": [ {"text": "xxx", "url": "xxx"}, … ]
    // }
    const timelineComposer = (prev, curr) => {
      // transform object to array, enables expand
      const previous = Array.isArray(prev) ? prev : [].concat(prev);
      const previousAward = previous.pop();
      if (previousAward.year !== curr.year) {
        if ("awards" in previousAward) {
          return [...previous, previousAward, curr];
        } else {
          return [
            ...previous,
            {
              year: previousAward.year,
              awards: [
                {
                  text: previousAward.text,
                  url: previousAward.url,
                },
              ],
            },
            curr,
          ];
        }
      } else {
        if ("awards" in previousAward) {
          return [
            ...previous,
            {
              year: previousAward.year,
              awards: [
                ...previousAward.awards,
                {
                  text: curr.text,
                  url: curr.url,
                },
              ],
            },
          ];
        } else {
          return [
            ...previous,
            {
              year: previousAward.year,
              awards: [
                {
                  text: previousAward.text,
                  url: previousAward.url,
                },
                {
                  text: curr.text,
                  url: curr.url,
                },
              ],
            },
          ];
        }
      }
    };

    const timeline = rawTimeline.reduce(timelineComposer);

    return {
      timeline,
    };
  },
};
</script>

<style>
.award-text {
  padding: 0.5em 1rem 0.5em 3rem;
  list-style: circle;
  grid-area: text;
}

.title-award-year {
  border-radius: 10px 10px 0 0;
  padding: 0.5em 0 0.5em 3rem;
  position: sticky;
  top: 0;
  width: 100%;
  background: #f2f2f2d9;
  backdrop-filter: blur(4px);
}

@supports not (backdrop-filter: blur(4px)) {
  .title-award-year {
    background: #f2f2f2;
  }
}

@supports not (position: sticky) {
  .title-award-year {
    position: relative;
  }
}

.award-info-link {
  display: inline-block;
  color: #0099ff;
  text-decoration-line: underline;
}
</style>
