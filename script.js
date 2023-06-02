const initialTerm1 = 100;
const commonRatio1 = 1.01;
const numberOfTerms1 = 365;

const initialTerm2 = 100;
const commonRatio2 = 1.0050;
const numberOfTerms2 = 365;

const terms1 = [initialTerm1];
for (let i = 1; i < numberOfTerms1; i++) {
  terms1.push(terms1[i - 1] * commonRatio1);
}

const terms2 = [initialTerm2];
for (let i = 1; i < numberOfTerms2; i++) {
    terms2.push(terms2[i - 1] * commonRatio2);
    }

const ctx = document.getElementById("progressionChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: Array.from({ length: 365 * 2 }, (_, i) => i + 1),
    datasets: [
      {
        label: "Person 1",
        data: terms1,
        borderColor: "red",
        borderWidth: 1,
        fill: false,
      },
      {
        label: "Person 2",
        data: terms2,
        borderColor: "blue",
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Term",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  },
});
