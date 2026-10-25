GeoAlert — Sample Test Cases

Test Case 1: Normal Conditions

Input: Rainfall 12 mm/hour, soil moisture 45%, ground movement 0.5 mm.
Expected result: NORMAL demo status.

Test Case 2: One Threshold Crossed

Input: Rainfall 55 mm/hour, soil moisture 65%, ground movement 1.2 mm.
Expected result: CAUTION demo status.

Test Case 3: Multiple Thresholds Crossed

Input: Rainfall 68 mm/hour, soil moisture 88%, ground movement 11.4 mm.
Expected result: HIGH RISK demo status.

Test Case 4: High Soil Moisture

Input: Rainfall 20 mm/hour, soil moisture 85%, ground movement 1 mm.
Expected result: CAUTION demo status.

Note

These are illustrative test cases for the software demonstration. They do not establish real-world landslide risk, and the thresholds require expert validation.
