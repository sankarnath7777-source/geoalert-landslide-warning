# GeoAlert Technologies — Landslide Early Warning Prototype

A beginner-friendly educational prototype for an IoT-enabled, multi-parameter landslide early warning concept.

## Current status
This repository contains a browser dashboard with **simulated** rainfall, soil-moisture, and ground-movement readings. It does not connect to physical sensors, send real alerts, or predict actual landslides. Do not use it for safety decisions.

## Run the demo
1. Download or clone this repository.
2. Open `index.html` in a modern web browser.
3. Select **Generate sample readings** to simulate new readings.

No installation or API keys are required.

## Project files
- `index.html` — dashboard structure
- `style.css` — visual styling
- `script.js` — simulated readings and example risk logic
- `sample-data.csv` — example data for documentation/testing
- `docs/technical-design.md` — architecture and limitations
- `tests/test-cases.md` — manual test cases
- `LICENSE` — MIT license

## Example logic
The demo uses illustrative thresholds: rainfall >= 50 mm/hour, soil moisture >= 80%, and ground movement >= 10 mm. Two or more triggered indicators show a demo high-risk status; one shows caution. These values are placeholders and must not be treated as validated landslide thresholds.

## Future improvements
- Connect a suitable microcontroller and calibrated sensors.
- Validate thresholds with geotechnical and disaster-management experts.
- Add robust communications, power backup, data logging, and alert delivery.
- Test in controlled conditions before any field deployment.

## Team
Project: GeoAlert Technologies  
Concept: IoT-Enabled Multi-Parameter Landslide Early Warning System for Hilly Regions
