# 💥 Effort vs Optimal Origin in Geometric Progressions

This project aims to illustrate the impact of effort versus an optimal origin in geometric progressions. The provided code generates three different progressions and visualizes them using a line chart. The goal is to demonstrate that effort, reflected in the common ratio, can lead to more significant growth and outperform a progression starting from an optimal origin alone.

## 🧠 Progressions and Parameters

The code generates the following progressions:

1. Progression 1: "Normal Origin, normal effort"
   - Initial Term: 100
   - Common Ratio: 1.01
   - Number of Terms: 365

2. Progression 2: "Normal Origin, high effort"
   - Initial Term: 100
   - Common Ratio: 1.0050
   - Number of Terms: 365

3. Progression 3: "Optimistic Origin, poor effort"
   - Initial Term: 200
   - Common Ratio: 1.0025
   - Number of Terms: 365

## 👀 Visualization and Comparison

The code utilizes the Chart.js library to create a line chart that displays the progressions. Each progression is represented by a colored line on the chart, illustrating the relationship between the term number (x-axis) and the value of the terms (y-axis).

The comparison is focused on Progression 1 and Progression 2. Progression 1 demonstrates a normal origin with a moderate level of effort, while Progression 2 showcases a normal origin with a higher level of effort. By comparing these two progressions, the aim is to highlight that a higher level of effort can lead to more significant growth and outperform a progression starting from an optimal origin alone.

Progression 3 serves as a reference point, representing an optimistic origin with poor effort. Including this progression helps emphasize the impact of effort on the overall growth and demonstrates that starting from an optimal point alone does not guarantee superior results.

## 🌱 Usage

To use this project:

1. Include the Chart.js library in your HTML file. You can use the following script tag:

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

2. Copy the provided JavaScript code into a <script> tag or an external JavaScript file.
3. Ensure that you have a canvas element in your HTML with the id "progressionChart".

```html
<canvas id="progressionChart"></canvas>
```

4. Adjust the progression parameters (initialTerm1, commonRatio1, numberOfTerms1, etc.) according to your requirements.
5. Run your HTML file in a browser or using a local development server to see the line chart visualization of the geometric progressions.
