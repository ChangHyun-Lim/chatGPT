' Robot kinematic module parameter data file
' Controller: NEXTIN SCARA,  Serial #: 0004FF-06470564
' System software: GPL 5.1D1, Sep 12 2024, Release, ECM
' File creation date: 05-26-2025 00:22:58

Begin: 1.0

DI: 2000, 0, 0, 0, "Number of axes" = 5
DI: 2001, 0, 0, 0, "Split axis mask" = 0
DI: 2002, 0, 0, 0, "Robot name" = "6-Axis Motion Device"
DI: 2003, 0, 0, 0, "Axis mask" = 31
DI: 2004, 0, 0, 0, "Number of extra, non-servoed, axes" = 0
DI: 2005, 0, 0, 0, "Motor linearity compensation" = 0
DI: 2006, 0, 0, 0, "Robot type special option flags" = 0
DI: 2007, 0, 0, 0, "Robot model number or version" = 0
DI: 2008, 0, 0, 0, "Robot model number or version #2" = 0
DI: 2009, 0, 0, 0, "GCU_Info" = "", "", "", "", ""
DI: 2010, 0, 0, 0, "Motor map nodes" = 1, 1, 1, 1, 1
DI: 2012, 0, 0, 0, "Motor name" = "MSMD012S1S 100W(T)", "MSMD042S1T 400W (Z)",
     "MSMD012S1S 100W(E)", "MSMD012S1S 100W(L)", "MSMF5AZL1 50W(U)"
DI: 2014, 0, 0, 0, "SpeedDAC output map: node, channel" = 0, 0
DI: 2026, 0, 0, 0, "Motor disable mask" = 0
DI: 2027, 0, 0, 0, "Enhanced free mode mask" = 0
DI: 2030, 0, 0, 0, "Robot is collaborative" = 0
DI: 2031, 0, 0, 0, "Enhanced safety mode" = 0
DI: 2032, 0, 0, 0, "Protection override axis mask" = 0

DI: 2101, 0, 0, 0, "RapidDecel deceleration in %" = 70
DI: 2102, 0, 0, 0, "Auto execute master/slave gear ratio" = 0
DI: 2103, 0, 0, 0, "Auto execute master/slave ramp time in sec" = 0
DI: 2104, 0, 0, 0, "Enable robot operation" = 1
DI: 2105, 0, 0, 0, "Simulate servo interface" = 0
DI: 2107, 0, 0, 0, "Enable servo command trace" = 0
DI: 2109, 0, 0, 0, "Simulated encoder velocity in encoder counts/sec" = 0
DI: 2110, 0, 0, 0, "Conveyor Tracking mode bits" = 0
DI: 2111, 0, 0, 0, "Soft overtravel" = 1
DI: 2112, 0, 0, 0, "RapidDecel mode" = 1

DI: 2202, 0, 0, 0, "Velocity control AIN" = 0

DI: 2300, 0, 0, 0, "Joint to motor scale factors" = 2236962.13, 838860.8,
     1262660.27, 838860.8, 838860.8, 1048576, 0, 0, 0, 0, 0, 0, 0,
     0, 0, 0, 0, 0, 0, 0
DI: 2302, 0, 0, 0, "Joint roll over value in deg" = 0, 0, 0, 0, 0
DI: 2303, 0, 0, 0, "Unidirectional roll over" = 0, 0, 0, 0, 0
DI: 2304, 0, 0, 0, "Vel Ctl inrange tolerance in deg/sec" = 0, 0,
     0, 0, 0
DI: 2305, 0, 0, 0, "Pos Ctl inrange tolerance in mcnts" = 19806, 7549,
     21939, 21939, 23301

DI: 2600, 0, 0, 0, "Nulling time out in sec" = 3
DI: 2601, 0, 0, 0, "Vel Ctl inrange time in sec" = 0.05

DI: 2700, 0, 0, 0, "100% joint speeds in (mm or deg)/sec" = 187.5,
     500, 332.1799, 500, 500
DI: 2701, 0, 0, 0, "100% Cartesian speeds in (mm or deg)/sec" = 2500,
     187.5, 0
DI: 2702, 0, 0, 0, "100% joint accels in (mm or deg)/sec^2" = 1875,
     5000, 1660, 5000, 5000
DI: 2703, 0, 0, 0, "100% Cartesian accels in (mm or deg)/sec^2" = 10000,
     937.5, 0
DI: 2704, 0, 0, 0, "Max %speed allowed" = 200
DI: 2705, 0, 0, 0, "Max %accel allowed" = 100
DI: 2706, 0, 0, 0, "Max %decel allowed" = 100
DI: 2707, 0, 0, 0, "Couple %accel/%decel to %speed" = 200
DI: 2708, 0, 0, 0, "Default %speed" = 100
DI: 2709, 0, 0, 0, "Default Cartesian rotation %speed" = 0
DI: 2710, 0, 0, 0, "Default %accel" = 100
DI: 2711, 0, 0, 0, "Default %decel" = 100
DI: 2712, 0, 0, 0, "Default max accel ramp time in sec" = 0.1
DI: 2713, 0, 0, 0, "Default max decel ramp time in sec" = 0.1
DI: 2720, 0, 0, 0, "Min ramp time interpolation range (deg or mm)" = 0,
     0, 0, 0, 0
DI: 2721, 0, 0, 0, "Min ramp time mid-pos (deg or mm)" = 0, 0, 0,
     0, 0
DI: 2722, 0, 0, 0, "Min ramp time mid-pos value (sec)" = 0, 0, 0,
     0, 0
DI: 2740, 0, 0, 0, "Certified safety zone, max Z/XY spd mm/sec" = -200,
     200

DI: 2801, 0, 0, 0, "Robot homed DOUT" = 0
DI: 2802, 0, 0, 0, "Homing sequence" = 1
DI: 2803, 0, 0, 0, "Homing method" = 35, 35, 35, 35, 35
DI: 2804, 0, 0, 0, "Homing speed 1, ecnts/sec" = 100, 2000000, 100,
     100, 100
DI: 2805, 0, 0, 0, "Homing speed 2, ecnts/sec" = 0, 0, 0, 0, 0
DI: 2807, 0, 0, 0, "Motor homing accel, ecnts/sec^2" = 392, 2E+07,
     392, 392, 392
DI: 2809, 0, 0, 0, "Commutate during homing" = 0
DI: 2810, 0, 0, 0, "Homing order" = 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
     0, 0
DI: 2811, 0, 0, 0, "Signal axis homing DOUT" = 0, 0, 0, 0, 0
DI: 2812, 0, 0, 0, "Wait to home axis DIN" = 0, 0, 0, 0, 0
DI: 2813, 0, 0, 0, "Timeout on home axis, sec" = 0
DI: 2814, 0, 0, 0, "Move to homing safe position" = 0, 0, 0, 0, 0
DI: 2815, 0, 0, 0, "Homing safe position, enc cnts" = 0, 0, 0, 0,
     0
DI: 2820, 0, 0, 0, "Max joint jog speed as %" = 8
DI: 2821, 0, 0, 0, "Max world/tool jog speed as %" = 5
DI: 2822, 0, 0, 0, "Rate of change of jog speed in %/sec" = 400
DI: 2823, 0, 0, 0, "Free mode inhibited axes mask" = 0
DI: 2824, 0, 0, 0, "Free mode gravity comp motor mask" = 0
DI: 2825, 0, 0, 0, "Jog tick joint step as %" = 0.001
DI: 2826, 0, 0, 0, "Jog tick world/tool step as %" = 0.001
DI: 2828, 0, 0, 0, "Free mode friction compensation, %rated" = 0,
     0, 0, 0, 0
DI: 2829, 0, 0, 0, "Free mode friction deadband, mm/sec" = 0, 0, 0,
     0, 0
DI: 2830, 0, 0, 0, "Free mode friction rate of change, %/sec" = 0,
     0, 0, 0, 0

DI: 3524, 0, 0, 0, "In-range DOUT" = 0

DI: 10008, 0, 0, 0, "Servo board configuration code" = -1
DI: 10012, 0, 0, 0, "Use amp type from: hardware[0/1], ID 10029[2]" = 0
DI: 10020, 0, 0, 0, "Axis capability bitmask" = 15, 15, 15, 15, 15
DI: 10021, 0, 0, 0, "Position loop update rate, second" = 0.0005,
     0.0005, 0.0005, 0.0005, 0.0005
DI: 10025, 0, 0, 0, "Minor axis number (dual-loop)" = 0, 0, 0, 0,
     0
DI: 10026, 0, 0, 0, "Encoder hardware channel number" = 2, 3, 1, 5,
     6
DI: 10027, 0, 0, 0, "Encoder type" = 44, 44, 44, 44, 44
DI: 10028, 0, 0, 0, "Amplifier hardware channel number" = 2, 3, 1,
     5, 6
DI: 10029, 0, 0, 0, "Amplifier type" = 62, 62, 62, 61, 61
DI: 10030, 0, 0, 0, "Motor commutation method" = 1, 1, 1, 1, 1
DI: 10049, 0, 0, 0, "Robot initialized" = 1

DI: 10104, 0, 0, 0, "Axis configuration word" = 14, 14, 14, 14, 14
DI: 10105, 0, 0, 0, "Home switch DIN signal" = -18210, -18310, 0,
     0, 0
DI: 10106, 0, 0, 0, "Positive overtravel DIN signal" = -18211, -18311,
     0, 0, 0
DI: 10107, 0, 0, 0, "Negative overtravel DIN signal" = -18212, -18312,
     0, 0, 0
DI: 10108, 0, 0, 0, "Dedicated DIN selection" = 3, 3, 0, 0, 0
DI: 10122, 0, 0, 0, "Hardstop envelope limit, mcnt" = 512000, 512000,
     512000, 512000, 512000
DI: 10123, 0, 0, 0, "Hardstop pos steady tolerance, mcnt" = 0, 0,
     0, 0, 0
DI: 10124, 0, 0, 0, "Hardstop back out distance, mcnt" = 1000, 10000,
     1000, 1000, 1000

DI: 10200, 0, 0, 0, "Encoder software configuration" = 0, 0, 0, 0,
     0
DI: 10202, 0, 0, 0, "Encoder sign, +/- 1" = -1, 1, -1, 1, -1
DI: 10203, 0, 0, 0, "Encoder counts for resolution calc, ecnt" = 8388608,
     8388608, 8388608, 8388608, 8388608
DI: 10204, 0, 0, 0, "Encoder revs for resolution calc, rev" = 1, 1,
     1, 1, 1
DI: 10206, 0, 0, 0, "Encoder to motor scale factor, mcnt/ecnt" = 1,
     1, 1, 1, 1
DI: 10207, 0, 0, 0, "Motor velocity SPR filter pole, Hz" = 100, 150,
     100, 100, 150
DI: 10208, 0, 0, 0, "Run-time speed limit, mcnt/sec" = 1.092267E+09,
     1.092267E+09, 1.092267E+09, 1.092267E+09, 1.092267E+09
DI: 10209, 0, 0, 0, "Manual mode speed limit, mcnt/sec" = 2.2E+07,
     2E+08, 2.2E+07, 2.2E+07, 2E+07
DI: 10210, 0, 0, 0, "Power sequence speed limit, mcnt/sec" = 4E+07,
     4E+08, 4E+07, 4E+07, 4E+07
DI: 10211, 0, 0, 0, "Enable dynamic slippage adjustment" = 0, 0, 0,
     0, 0
DI: 10212, 0, 0, 0, "Dual loop position slippage limit, mcnt" = 500,
     500, 500, 500, 500
DI: 10213, 0, 0, 0, "Minor to major encoder scale factor" = 1, 1,
     1, 1, 1
DI: 10216, 0, 0, 0, "Dual loop speed slippage limit, mcnt/sec" = 20000,
     20000, 20000, 20000, 20000
DI: 10217, 0, 0, 0, "Filtered position tracking effort" = 25, 25,
     25, 25, 25
DI: 10251, 0, 0, 0, "Ignore encoder battery alarm during homing" = 0,
     0, 0, 0, 0
DI: 10252, 0, 0, 0, "Min. accel time to 5000 RPM, msec" = 2, 3, 2,
     2, 3
DI: 10257, 0, 0, 0, "Encoder hardware filter config" = 0, 0, 0, 0,
     0
DI: 10258, 0, 0, 0, "Number of single turn data bits" = 23, 23, 23,
     23, 23
DI: 10259, 0, 0, 0, "Misc. serial encoder configuration bitmask" = 0,
     0, 0, 0, 0
DI: 10290, 0, 0, 0, "Number of multi-turn data bits" = 16, 16, 16,
     16, 16

DI: 10300, 0, 0, 0, "Feedback compensator configuration" = 624, 48,
     624, 624, 624
DI: 10302, 0, 0, 0, "Soft envelope error limit, mcnt" = 640000, 640000,
     640000, 640000, 640000
DI: 10303, 0, 0, 0, "Hard envelope error limit, mcnt" = 1280000, 1280000,
     1280000, 1280000, 1280000
DI: 10304, 0, 0, 0, "Envelope error check duration, sec" = 0.004,
     0.004, 0.004, 0.004, 0.004
DI: 10305, 0, 0, 0, "Velocity feedback blending factor" = 1, 1, 1,
     1, 1
DI: 10320, 0, 0, 0, "Enable clearing of integrator state flag" = 1,
     1, 1, 1, 1
DI: 10321, 0, 0, 0, "Feedforward type selection" = 0, 0, 0, 0, 0
DI: 10322, 0, 0, 0, "Velocity error type selection" = 0, 0, 0, 0,
     0
DI: 10324, 0, 0, 0, "Position in-tolerance duration, sec" = 0.008,
     0.008, 0.008, 0.008, 0.008
DI: 10325, 0, 0, 0, "Position in-tolerance prediction window, sec" = 0.004,
     0.004, 0.004, 0.004, 0.004
DI: 10326, 0, 0, 0, "Velocity error SPR filter pole, Hz" = 500, 400,
     500, 500, 500
DI: 10327, 0, 0, 0, "Accel error DPR filter pole, Hz" = 0, 0, 0, 0,
     0
DI: 10328, 0, 0, 0, "Feedforward SPR filter pole, Hz" = 100, 100,
     100, 100, 100
DI: 10329, 0, 0, 0, "Torque output filter pole, Hz" = 0, 0, 0, 0,
     0
DI: 10330, 0, 0, 0, "Torque output filter damping ratio" = 0, 0, 0,
     0, 0
DI: 10331, 0, 0, 0, "Proportional gain, Kp" = 0.02, 0.015, 0.02, 0.015,
     0.015
DI: 10332, 0, 0, 0, "Integral gain, Ki" = 0.002, 0.002, 0.0005, 0.0005,
     0.0005
DI: 10333, 0, 0, 0, "Derivative gain, Kd" = 0.1, 0.1, 0.1, 0.2, 0.2
DI: 10334, 0, 0, 0, "Integrator limit" = 3000, 5000, 2000, 2000, 2000
DI: 10335, 0, 0, 0, "Integrator rate limit" = 3000, 5000, 2000, 2000,
     2000
DI: 10336, 0, 0, 0, "Acceleration feedforward gain" = 0.7, 0.5, 1.3,
     1, 0.3
DI: 10337, 0, 0, 0, "Velocity feedforward gain" = 0.02, 0.005, 0.005,
     0.007, 0.004
DI: 10338, 0, 0, 0, "Accel error gain, Ka" = 0.02, 0, 0.02, 0.02,
     0.02
DI: 10339, 0, 0, 0, "Cross coupling gain, Kcp" = 0, 0, 0, 0, 0
DI: 10340, 0, 0, 0, "Integrator deadband, mcnt" = 0, 0, 0, 0, 0
DI: 10341, 0, 0, 0, "Cross coupling error SPR filter pole, Hz" = 0,
     0, 0, 0, 0
DI: 10342, 0, 0, 0, "Position feedforward gain" = 0, 0, 0, 0, 0
DI: 10343, 0, 0, 0, "Motor neutral position, mcnt" = 0, 0, 0, 0, 0
DI: 10344, 0, 0, 0, "Position adjustment coefficient 0" = 0, 0, 0,
     0, 0
DI: 10345, 0, 0, 0, "Position adjustment coefficient 1" = 0, 0, 0,
     0, 0
DI: 10346, 0, 0, 0, "Position adjustment coefficient 2" = 0, 0, 0,
     0, 0
DI: 10347, 0, 0, 0, "Friction feedforward torque, tcnt" = 0, 0, 800,
     300, 300
DI: 10348, 0, 0, 0, "Feedforward torque rate limit" = 100, 100, 100,
     100, 100
DI: 10349, 0, 0, 0, "Gravity compensation torque, tcnt" = 0, 2500,
     0, 0, 0
DI: 10351, 0, 0, 0, "Max positive torque limit for PID feedback, tcnt" = 0,
     0, 0, 0, 0
DI: 10352, 0, 0, 0, "Max negative torque limit for PID feedback, tcnt" = 0,
     0, 0, 0, 0
DI: 10353, 0, 0, 0, "Torque output filter pole, Hz #2" = 0, 0, 0,
     0, 0
DI: 10354, 0, 0, 0, "Torque output filter damping ratio #2" = 0, 0,
     0, 0, 0
DI: 10355, 0, 0, 0, "Saved integrator torque preload, tcnt" = 0, 0,
     0, 0, 0
DI: 10356, 0, 0, 0, "Velocity error custom filter coefficient 0" = 0,
     0, 0, 0, 0
DI: 10357, 0, 0, 0, "Velocity error custom filter coefficient 1" = 0,
     0, 0, 0, 0
DI: 10358, 0, 0, 0, "Velocity error custom filter coefficient 2" = 0,
     0, 0, 0, 0
DI: 10359, 0, 0, 0, "Velocity error custom filter coefficient 3" = 0,
     0, 0, 0, 0
DI: 10360, 0, 0, 0, "Velocity error custom filter coefficient 4" = 0,
     0, 0, 0, 0
DI: 10361, 0, 0, 0, "Torque output filter pole, Hz #3" = 0, 0, 0,
     0, 0
DI: 10362, 0, 0, 0, "Torque output filter damping ratio #3" = 0, 0,
     0, 0, 0
DI: 10363, 0, 0, 0, "Kd gain schedule, gain at zero speed, Kd" = 0,
     0, 0, 0, 0
DI: 10364, 0, 0, 0, "Kd gain schedule, activate below speed, mcnt/sec" = -0,
     0, -0, -0, -0
DI: 10365, 0, 0, 0, "Torque output filter pole, Hz #4" = 0, 0, 0,
     0, 0
DI: 10366, 0, 0, 0, "Torque output filter damping ratio #4" = 0, 0,
     0, 0, 0
DI: 10367, 0, 0, 0, "Max torque limit for PID feedback after error, tcnt" = 0,
     0, 0, 0, 0
DI: 10368, 0, 0, 0, "Max torque limit for feedforward after error, tcnt" = 0,
     0, 0, 0, 0
DI: 10369, 0, 0, 0, "PID output saturation duration limit, sec" = 2,
     2, 2, 2, 2
DI: 10370, 0, 0, 0, "Integrator clear rate limit, tcnt" = 0, 0, 0,
     0, 0
DI: 10371, 0, 0, 0, "Friction feedforward rate limit, tcnt" = 0, 0,
     0, 0, 0
DI: 10373, 0, 0, 0, " DFF linear scale factor for Kt compensation" = 0,
     0, 0, 0, 0
DI: 10374, 0, 0, 0, "DFF offset scale factor for Kt compensation" = 0,
     0, 0, 0, 0

DI: 10420, 0, 0, 0, "Trajectory interpolation type selection" = 0,
     0, 0, 0, 0
DI: 10425, 0, 0, 0, "Position move to when disable robot power, mcnt" = 0,
     0, 0, 0, 0
DI: 10426, 0, 0, 0, "Time for the motion when disable power, sec" = 0,
     0, 0, 0, 0
DI: 10440, 0, 0, 0, "ADC input torque command enable" = 0, 0, 0, 0,
     0
DI: 10480, 0, 0, 0, "Master axis number" = 0, 0, 0, 0, 0

DI: 10601, 0, 0, 0, "Motor type per CANopen spec" = 10, 10, 10, 10,
     10
DI: 10606, 0, 0, 0, "Error block time configuration" = 0, 0, 0, 0,
     0
DI: 10607, 0, 0, 0, "Brake pulse time configuration" = 0, 0, 0, 0,
     0
DI: 10609, 0, 0, 0, "Torque sign, +/- 1" = -1, 1, -1, 1, -1
DI: 10610, 0, 0, 0, "Amplifier PEAK(non-RMS) current, A(z-p)" = 20,
     20, 20, 10, 10
DI: 10611, 0, 0, 0, "RMS rated motor current, A(rms)" = 2.4, 2.4,
     2.4, 1.1, 1.1
DI: 10613, 0, 0, 0, "AUTO mode motor PEAK(non-RMS)/(RMS rated) current, %" = 427,
     423, 427, 300, 300
DI: 10615, 0, 0, 0, "MANUAL mode motor PEAK(non-RMS)/(RMS rated) current, %" = 50,
     50, 50, 50, 50
DI: 10617, 0, 0, 0, "Motor stalled check duration, sec" = 2, 2, 2,
     0.5, 0.5
DI: 10621, 0, 0, 0, "Duty cycle SPR filter pole, Hz" = 0.01, 0.1,
     0.1, 0.01, 0.01
DI: 10622, 0, 0, 0, "Duty cycle exceeded duration, sec" = 2, 2, 2,
     0.7, 0.7
DI: 10623, 0, 0, 0, "Duty cycle limit in terms of rated torque, %" = 100,
     150, 100, 79.99999, 79.99999
DI: 10625, 0, 0, 0, "Auxiliary brake release DOUT signal" = 0, 8331,
     0, 0, 0
DI: 10627, 0, 0, 0, "Torque output DAC offset" = 0, 0, 0, 0, 0
DI: 10628, 0, 0, 0, "Torque output scale factor [0,1]" = 1, 1, 1,
     1, 1
DI: 10629, 0, 0, 0, "Auxiliary clear amp fault DOUT signal" = 0, 0,
     0, 0, 0
DI: 10630, 0, 0, 0, "Rated EtherCAT motor torque count" = 0, 0, 0,
     0, 0
DI: 10650, 0, 0, 0, "Commutation sign, +/- 1" = -1, -1, -1, -1, -1
DI: 10651, 0, 0, 0, "# of pole-pairs per motor revolution" = 5, 5,
     5, 5, 5
DI: 10652, 0, 0, 0, "Commutation counts per electrical cycle, mcnt" = 1677722,
     1677722, 1677722, 1677722, 1677722
DI: 10653, 0, 0, 0, "Velocity for blending cogging compensation, mcnt/sec" = 0,
     0, 0, 0, 0
DI: 10656, 0, 0, 0, "Current loop proportional gain, Kp" = 0.05, 0.05,
     0.05, 0.05, 0.05
DI: 10657, 0, 0, 0, "Current loop damping gain, Kv" = 3, 3, 3, 0.4,
     0.4
DI: 10658, 0, 0, 0, "Motor back-EMF constant, volt/(mcnt/sec)" = 0,
     0, 0, 0, 0
DI: 10667, 0, 0, 0, "Disable low DC bus nominal voltage detection" = 0,
     0, 0, 0, 0
DI: 10668, 0, 0, 0, "Skip DC bus check before enabling charge pump" = 0,
     0, 0, 0, 0
DI: 10669, 0, 0, 0, "Phase advance, activate above speed, mcnt/sec" = 0,
     0, 0, 0, 0
DI: 10670, 0, 0, 0, "Phase advance gain, degree/(mcnt/sec)" = 0, 0,
     0, 0, 0
DI: 10671, 0, 0, 0, "Maximum phase advance, degree" = 0, 0, 0, 0,
     0
DI: 10672, 0, 0, 0, "Motor cogging compensation gain" = 0, 0, 0, 0,
     0
DI: 10673, 0, 0, 0, "Cogging compensation rate limit, ccnt" = 0, 0,
     0, 0, 0
DI: 10674, 0, 0, 0, "Dump circuit duty cycle limit, %" = 20, 20, 20,
     20, 20
DI: 10683, 0, 0, 0, "Current offset of phase 1, ccnt" = 5, -1, 0,
     -1, -1
DI: 10684, 0, 0, 0, "Current offset of phase 2, ccnt" = 6, -3, 2,
     0, 0
DI: 10695, 0, 0, 0, "Disable auto phase offset adjustment" = 0, 0,
     0, 0, 0

DI: 10700, 0, 0, 0, "Commutation reference setup config" = 4, 4, 4,
     4, 4
DI: 10704, 0, 0, 0, "PAF angle adjustment amount, degree" = 5, 5,
     5, 5, 5
DI: 10705, 0, 0, 0, "PAF angle fine adjustment amount, degree" = 1.5,
     1.5, 1.5, 1.5, 1.5
DI: 10706, 0, 0, 0, "PAF duration time for twang ON, sec" = 0.05,
     0.05, 0.05, 0.05, 0.05
DI: 10707, 0, 0, 0, "PAF duration time for twang OFF, sec" = 0.02,
     0.02, 0.02, 0.02, 0.02
DI: 10708, 0, 0, 0, "PAF duration time for brake release, sec" = 1,
     1, 1, 1, 1
DI: 10709, 0, 0, 0, "PAF duration time for brake engage, sec" = 0.25,
     0.25, 0.25, 0.25, 0.25
DI: 10710, 0, 0, 0, "PAF twang range convergence factor, (0,1)" = 0.5,
     0.5, 0.5, 0.5, 0.5
DI: 10712, 0, 0, 0, "PAF twang torque %" = 50, 50, 50, 50, 50
DI: 10713, 0, 0, 0, "PAF verification twang torque %" = 0, 0, 0, 0,
     0
DI: 10714, 0, 0, 0, "PAF twang torque offset %" = 100, 100, 100, 100,
     100
DI: 10727, 0, 0, 0, "Twang-ref duration for twang ON, sec" = 1, 1,
     1, 1, 1
DI: 10728, 0, 0, 0, "Twang-ref duration for twang OFF, sec" = 1, 1,
     1, 1, 1
DI: 10729, 0, 0, 0, "Twang-ref delay time to release brake, sec" = 1,
     1, 1, 1, 1
DI: 10730, 0, 0, 0, "Twang-ref delay time to engage brake, sec" = 1,
     1, 1, 1, 1
DI: 10731, 0, 0, 0, "# of ramp steps to a twang" = 5, 5, 5, 5, 5
DI: 10732, 0, 0, 0, "# of twang-ref checks" = 4, 4, 4, 4, 4
DI: 10733, 0, 0, 0, "Twang-ref check duration time, sec" = 0.5, 0.5,
     0.5, 0.5, 0.5
DI: 10734, 0, 0, 0, "Twang-ref check position tolerance limit, %" = 8,
     8, 8, 8, 8
DI: 10735, 0, 0, 0, "Twang-ref torque %" = 120, 100, 120, 120, 150
DI: 10744, 0, 0, 0, "Hall sensor step 1 commutation pos, mcnt" = -1,
     -1, -1, -1, -1
DI: 10745, 0, 0, 0, "Hall sensor step 2 commutation pos, mcnt" = -1,
     -1, -1, -1, -1
DI: 10746, 0, 0, 0, "Hall sensor step 3 commutation pos, mcnt" = -1,
     -1, -1, -1, -1
DI: 10747, 0, 0, 0, "Hall sensor step 4 commutation pos, mcnt" = -1,
     -1, -1, -1, -1
DI: 10748, 0, 0, 0, "Hall sensor step 5 commutation pos, mcnt" = -1,
     -1, -1, -1, -1
DI: 10749, 0, 0, 0, "Hall sensor step 6 commutation pos, mcnt" = -1,
     -1, -1, -1, -1
DI: 10750, 0, 0, 0, "Hall sensor step 1 nominal angle, degree" = -1,
     -1, -1, -1, -1
DI: 10751, 0, 0, 0, "Hall sensor step 2 nominal angle, degree" = -1,
     -1, -1, -1, -1
DI: 10752, 0, 0, 0, "Hall sensor step 3 nominal angle, degree" = -1,
     -1, -1, -1, -1
DI: 10753, 0, 0, 0, "Hall sensor step 4 nominal angle, degree" = -1,
     -1, -1, -1, -1
DI: 10754, 0, 0, 0, "Hall sensor step 5 nominal angle, degree" = -1,
     -1, -1, -1, -1
DI: 10755, 0, 0, 0, "Hall sensor step 6 nominal angle, degree" = -1,
     -1, -1, -1, -1
DI: 10756, 0, 0, 0, "Analog hall commutation phase angle, degree" = 0,
     0, 0, 0, 0
DI: 10760, 0, 0, 0, "Search ref torque limit %" = 100, 50, 100, 100,
     100
DI: 10761, 0, 0, 0, "Search ref torque step %" = 0.2, 0.05, 0.2, 0.2,
     0.5
DI: 10762, 0, 0, 0, "Min. angle move in binary search, degree" = 2.8,
     2.8, 2.8, 2.8, 2.8
DI: 10763, 0, 0, 0, "Axis load direction" = 0, 0, 0, 0, 0
DI: 10764, 0, 0, 0, "Max. drop allowed for loaded axis, mcnt" = 838861,
     838861, 838861, 838861, 838861
DI: 10769, 0, 0, 0, "Search ref pre-load torque %" = 0, 0, 0, 0, 0
DI: 10770, 0, 0, 0, "Search ref internal control" = 0, 0, 0, 0, 0
DI: 10771, 0, 0, 0, "Search ref delay after current ON/OFF, sec" = 1,
     1, 1, 1, 0.075
DI: 10772, 0, 0, 0, "Search ref delay to release brake, sec" = 1,
     1, 1, 1, 0.25
DI: 10773, 0, 0, 0, "Search ref delay to engage brake, sec" = 1, 1,
     1, 1, 0.25
DI: 10774, 0, 0, 0, "Search ref check duration, sec" = 1, 1, 1, 1,
     0.5
DI: 10775, 0, 0, 0, "Commutation offset, mcnt" = 700416, 702464, 704000,
     704512, 706048
DI: 10776, 0, 0, 0, "Search ref check angle, degree" = 14, 14, 14,
     14, 14
DI: 10777, 0, 0, 0, "Search ref check tolerance %" = 4.472222, 4.472222,
     4.472222, 4.472222, 4.472222
DI: 10778, 0, 0, 0, "Search ref operation effort" = 35, 35, 35, 35,
     35
DI: 10779, 0, 0, 0, "Search ref auto adjust pre-load torque" = 1,
     1, 1, 1, 1

End:

' End of file
