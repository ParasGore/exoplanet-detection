const slides = [
  {
    section: 'Opening', visual: 'orbit', duration: 60,
    kicker: "Learners' Space Astronomy",
    title: 'Exoplanet Detection',
    subtitle: 'How astronomers find worlds that are too far, too faint, and often completely hidden inside the glare of their stars.',
    body: ``,
    image: `images/Exoplanet.jpeg`,
    notes: `Start by framing the central difficulty: exoplanets are not usually seen directly. Most are inferred from tiny effects on light, timing, position or brightness. Tell the audience that the presentation is organised like a detection mission: first define the target, then examine each instrument and signal.`
  },
  {
    section: 'Basics', visual: 'orbit', duration: 60,
    kicker: 'Definition', title: 'What is an exoplanet?',
    subtitle: 'An exoplanet, or extrasolar planet, is a planet outside our Solar System. A planet within the solar system is famously defined by the IAU as follows:',
    body: `<ul><li>Must be in orbit around the Sun.</li><li>Has sufficient mass to achieve hydrostatic equilibrium (i.e., a round shape).</li><li>Has cleared the neighbourhood around its orbit.</li></ul><br>For exoplanets, we generally extend the first criterion to objects orbiting stars other than the Sun.`,
    notes: `Do not spend too long debating formal definitions. The practical point for detection is: planets are faint companions. The observable is usually not the planet surface; it is the planet’s effect on the system. There are also free floating exoplanets / rogue planets, etc.`
  },
  {
    section: 'Basics', visual: 'orbit', duration: 65,
    kicker: 'Motivation', title: 'Why should we care?',
    image: `images/typesOfExoplanets.png`,
    subtitle: 'Exoplanets test our theories of planet formation, habitability and whether Solar-System-like architectures are common.',
    body: `<ul><li>They help us test and verify our assumptions about how planets form and migrate.</li><li>They let us compare rocky worlds, gas giants, hot Jupiters, super-Earths and mini-Neptunes.</li><li>They move the question “Are we alone?” from philosophy toward observation.</li></ul>`,
    notes: `Exoplanet science changed astronomy quickly: before the 1990s, there were no confirmed planets around Sun-like stars. Now exoplanets are a normal part of astrophysics. Fermi famously asked whether we're alone in the universe- exoplanets are some of our foremost candidates for extraterrestrial life.`
  },
  {
    section: 'Basics', visual: '', duration: 60,
    kicker: 'What we want to know', title: 'Detection is only the first step',
    subtitle: 'A good detection method should ideally tell us more than “there is something there.”',
    body: `<div class="cards"><div class="card"><h3>Orbit</h3><p>Period, semi-major axis, eccentricity and inclination.</p></div><div class="card"><h3>Bulk properties</h3><p>Radius, mass, density and rough composition.</p></div><div class="card"><h3>Atmosphere</h3><p>Spectra can indicate molecules, clouds, temperature and possible biosignature candidates.</p></div><div class="card"><h3>Habitability</h3><p>Distance from star, stellar radiation and atmospheric conditions matter together.</p></div></div>`,
    notes: `This slide prepares the audience for why methods are complementary. Transit based detection can help us detect radius; radial velocity gives mass information; together they can give us something like the density of the planet (which tells us whether its rocky, a gas giant, etc.). Spectroscopy might tell us about its atmosphere.`
  },
    {
    section: 'Basics', visual: 'orbit', duration: 70,
    kicker: 'The big question', title: 'How do you find a planet you cannot see?',
    image: `images/DH_Tauri.jpg`,
    subtitle: 'A planet is small, dim and usually very close to a much brighter star on the sky.',
    body: `<ul><li>In most systems, the star dominates the image.</li><li>The planet may reveal itself through a dip, wobble, timing delay, magnification event or direct point-source detection.</li><li>Every method is a different way of asking: what changed because a planet is there?</li></ul>`,
    notes: `Use a simple analogy: finding a planet beside a star is like finding a firefly next to a searchlight from kilometres away. The cleverness of exoplanet detection is that we often do not need to see the planet itself; we only need a reliable, repeatable fingerprint.`
  },
  {
    section: 'History', visual: 'pulsar', duration: 70,
    kicker: 'A surprising beginning', title: 'First confirmed exoplanets',
    image: 'images/PSR_B1257.jpg',
    subtitle: 'The first confirmed exoplanets were not around a Sun-like star, but around PSR B1257+12, a rapidly rotating neutron star.',
    body: `<div class="timeline"><div class="timeline-row"><span class="timeline-year">1992</span><span class="timeline-text">Wolszczan and Frail confirmed planets through pulsar timing variations.</span></div><div class="timeline-row"><span class="timeline-year">Signal</span><span class="timeline-text">The pulsar’s extremely regular pulses arrived slightly early or late because the pulsar moved around the system barycentre. Interestingly, we now know that these kinds of exoplanets are actually very rare. Only 8 out of 6000+ exoplanets we know of today were discovered using pulsar timings.</span></div></div>`,
    notes: `This is a good story slide. The first confirmed worlds were found through precision timing, not through images. Pulsars act like cosmic clocks. If the clock is moving because of a companion, the pulse arrival times shift.`
  },
  {
    section: 'History', visual: 'rv', duration: 70,
    kicker: 'Some background on where exoplanets are found', title: 'Where Exoplanets are Found',
    subtitle: '',
    body: `Star systems can be wildly different from the solar system. For instance, about 3 years after the first exoplanet was discovered, astronomers came across 51 Pegasi. This is a star very similar to our own sun. Using certain techniques, they detected a massive gas giant orbiting very close to the star (with an orbital period of only 4.2 days). This was a type of exoplanet known as a "Hot Jupiter"- which had previously only been theorized. With only our own solar system to go off of, this discovery was considered very surprising at the time. In general, most of the 6000 exoplanets we have discovered so far have been around F, G, and K-type stars (similar to or slightly different from our Sun). These stars are common, stable, and live long anough to make planet detection easier. Smaller stars have planets hard to detect with common methods, while hot and massive stars show much weaker observable effects from their planets. Astronomers naturally focused on the more accessible stars because expensive planet-hunting missions will obviously aim for the best chance of success.`,
    notes: `Explain why this discovery was weird: a Jupiter-mass planet so close to its star was not what the Solar System had trained astronomers to expect. This pushed planet migration and formation theories forward.`
  },
  {
    section: 'History', visual: 'orbit', duration: 55,
    kicker: 'A bias warning', title: 'Selection Bias',
    subtitle: 'The planets we find first are often the planets that produce the strongest signals.',
    body: `<ul><li>Close-in giant Jupiter-like planets are easier for radial velocity and transits.</li><li>Young (and ideally hot) giants are easier for direct imaging.</li><li>Microlensing can detect very distance / faint systems, but the events are non-repeatable.</li></ul>`,
    notes: `Introduce selection bias. Our catalogue of exoplanets is shaped by what our methods can detect. The universe is not necessarily full only of hot Jupiters; they were simply easier to find early.`
  },
  {
    section: 'Basics', visual: 'compass', duration: 60,
    kicker: 'The methods', title: 'Seven major ways to detect exoplanets',
    subtitle: '',
    image: 'images/exoplanetsDiscoveryMethods.png',
    body: `There are seven major ways to detect exoplanets. These are as follows. <ul><li>Pulsar Timing</li><li>Direct Imaging</li><li>Gravitational Microlensing</li><li>Astrometry</li><li>Transits</li><li>Radial Velocity Method</li><li>Orbital Brightness Variation</li></ul> Remember that the multiple methods can often be used to confirm the existence of exoplanets. For instance, we often use the radial velocity method to confirm potential candidates.`,
    notes: `This slide gives the full map. Point out that the same physical cause — gravity between star and planet — can appear in many different observables.`
  },
  {
    section: 'Pulsar Timing', visual: 'pulsar', duration: 55,
    kicker: 'Method 1', title: 'Timing variations',
    subtitle: '',
    image: 'images/Crab_Lucky_video2.gif',
    body: `Orbiting planets lead to oscillations of the host star about the barycenter of the system. In certain cases where the host star gives us some sort of periodic signal, this gives us a way to detect exoplanets by variations in the measured time period of that signal (due to change in distance over the star's orbit). We will be taking millisecond pulsars as an example. Basically, <ul><li>Millisecond pulsars can be timed with extreme precision.</li><li>If a planet makes the pulsar orbit the barycentre, the light travel distance changes.</li><li>That creates early/late arrival times called timing residuals.</li></ul>`,
    notes: `Start the method section. Say: imagine a lighthouse rotating with incredible regularity. If the lighthouse itself moves back and forth, flashes reach us earlier or later.`
  },
{
    section: 'Pulsar Timing', visual: 'pulsar', duration: 70,
    kicker: 'Signal origin', title: 'Equation governing these residuals',
    subtitle: 'Using the equation of an ellipse and assuming the signal travels to us at the speed of light c (also assuming that the inclination of the orbital plane of the system is i), we get the following expression:',
    body: `$$\\tau_p = \\frac{1}{c} \\cdot \\left[ \\frac{a \\sin(i) M_p}{M_\\star + M_p} \\right] \\approx \\frac{1}{c} \\cdot \\left[ \\frac{a \\sin(i) M_p}{M_\\star} \\right]$$
        <ul>
            <li><strong>$\\tau_p$</strong> is the timing residual amplitude.</li>
            <li><strong>$a$</strong> is the planet’s semi-major axis.</li>
            <li><strong>$i$</strong> is inclination (only the line-of-sight component matters).</li>
        </ul>`,
    notes: `Walk through the equation slowly. The factor 1/c converts a distance difference into a time difference. The sin(i) term tells us that face-on motion produces little line-of-sight delay.`
},
  {
    section: 'Pulsar Timing', visual: 'pulsar', duration: 70,
    kicker: 'Data reality', title: 'Weeding out data that is irrelevant',
    subtitle: '',
    image: 'images/residualsWithFluctuations.png',
    body: `If you look at graphs of real residuals you will see a lot of fluctuations for a number of reasons <ul><li>Spin down of pulsars</li><li>So-called 'glitches' in their motion due to various effects</li><li>Parallax and the effect of earth's motion</li></ul> Once we account for such effects, we should be left either with a flat residual when there are no planets, or the effect of the planet(s) orbiting the star.`,
    notes: `Emphasise that detection is model comparison. You fit known effects first. If residual patterns remain, planetary models may explain them.`
  },
  {
    section: 'Pulsar Timing', visual: 'pulsar', duration: 65,
    kicker: 'Fitting logic', title: 'Detecting planets',
    image: 'images/PlanetResidual.png',
    subtitle: 'At this point we are just left with the task of data fitting.',
    body: `There are a number of different Keplerian planet models that we can try and fit while varying the parameters onto the residual data that is left to us after subtracting the noise. The best fitting model and parameters will tell us what our system most probably looks like.`,
    notes: `Use PSR B1257+12 as the example. Continued monitoring confirmed the planet interpretation because interactions between planets produced predictable departures from a simple Keplerian model.`
  },
  {
    section: 'Pulsar Timing', visual: 'pulsar', duration: 55,
    kicker: 'Strengths and limits', title: 'Pros and cons of this method',
    subtitle: '',
    body: `The pulsar timing method is much more sensitive than our other methods of planet detection- capable of identifying planets down to less than 10% the mass of the Earth. However, it has two main drawbacks. The first is that pulsars are very rare, and the second is that very few of them have planets around them anyways. Additionally, we're unlikely to find life on such planets due to high ambient radiation which reduces scientific interest in them.`,
    notes: `Conclude that pulsar timing is historically important but not the main method for ordinary main-sequence star surveys. Special circumstabnces required for formatino of polanets around pulsars.`
  },
  {
    section: 'Direct Imaging', visual: 'imaging', duration: 55,
    kicker: 'Method 2', title: 'Direct imaging',
    subtitle: 'Try to detect the planet as a faint point source near the host star.',
    body: `<ul><li>The planet may be seen in reflected starlight or in its own thermal infrared emission.</li><li>The goal is usually detection as a point, not resolving the planet surface.</li><li>It is conceptually simple but technically very hard.</li></ul>`,
    notes: `Make clear that direct imaging does not mean a detailed photograph of continents or clouds. Usually it means isolating a faint dot from the star’s glare.`
  },
  {
    section: 'Direct Imaging', visual: 'imaging', duration: 70,
    kicker: '', title: 'Difficulties',
    subtitle: '',
    image: 'images/crowdedStarField.png',
    body: `What we see from the earth is the apparent magnitude of astronomical bodies, and as such what matters is the relative brightness of the planet and the star. $$\\frac{f_p(\\alpha, \\lambda)}{f_*(\\lambda)} = p(\\lambda)\\times (\\frac{R_p}{a})^2 \\times g(\\alpha)$$ <ul><li>$p(\\lambda)$: geometric albedo.</li><li>$\\frac{R_p}{a}$: planet size compared with orbital distance.</li><li>$g(\\alpha)$: phase function depending on current phase.</li></ul><br>The specific form of the phase function depends on the scattering and reflective properties of the planet’s atmosphere or surface. It describes how the reflected light from the planet varies with different phase angles.`,
    notes: `Explain each term qualitatively. Bigger/brighter planets are easier. Planets far from the star are easier to separate angularly but may be dimmer and cooler.`
  },
  {
    section: 'Direct Imaging', visual: 'imaging', duration: 55,
    kicker: '', title: 'Effects to account for',
    image: 'images/directImagingProblems.png',
    subtitle: 'The host star’s light may leak into the pixels where the planet would have appeared due to various effects.',
    body: `<ul><li>Flux ratio can be 10⁵ to 10¹⁰ against you</li><li>Diffraction can create rings.</li><li>Atmospheric turbulence distorts wavefronts from the ground.</li><li>Optical imperfections in your instrument can create speckles that look like planets.</li></ul>`,
    notes: `Use the lighthouse analogy from the material. Then say: even after blocking the star, residual speckles remain, and those speckles may look like companions.`
  },
  {
    section: 'Direct Imaging', visual: 'imaging', duration: 70,
    kicker: 'Resolution', title: 'Large apertures help separate close objects',
    image: 'images/jwst.jpg',
    subtitle: 'Resolving power improves with telescope diameter and shorter wavelength.',
    body: `<div class="equation">$θ_{min} ≈ 1.22 \\frac {λ}{D}$</div><ul><li>θmin is the smallest angular separation resolvable.</li><li>λ is the observing wavelength.</li><li>D is telescope aperture diameter.</li></ul>`,
    notes: `Connect this with Rayleigh criterion. Larger telescopes produce narrower diffraction patterns. But bigger telescopes alone do not solve contrast; they also need wavefront control and post-processing.`
  },
  {
    section: 'Direct Imaging', visual: 'imaging', duration: 60,
    kicker: '', title: 'Targets and Inferences',
    subtitle: '',
    body: `To date, the first images of massive, widely separated exoplanets have been acquired, although none so far resemble those of the solar system. The detection of exo-Earths remains out of reach of any of the imaging facilities currently under development. We can so far use direct imaging only for certains kinds of systems- (a) young stars and planets where the planets are still self-luminous and thus able to provide radiation our telescopes can detect, (b) stars with known high-mass giant planets in orbits far away from their host stars, (c) nearby stars with relatively large planets orbiting them.`,
    notes: `Mention that direct imaging is most successful for young, massive planets at wide separations because they are warm and far enough from the star to isolate.`
  },
  {
    section: 'Direct Imaging', visual: 'imaging', duration: 55,
    kicker: 'What it tells us', title: 'Benefits of direct imaging',
    image: 'images/HR_8799_Orbiting_Exoplanets.gif',
    subtitle: 'Once a planet is isolated, follow-up observations can probe temperature, atmosphere and orbital motion.',
    body: `<ul><li>Imaging over long time scales can trace orbital arcs.</li><li>Spectroscopic analysis can reveal molecules and atmospheric properties.</li><li>Brightness can be used to estimate temperature and mass.</li></ul>`,
    notes: `Direct imaging has a high scientific reward because light from the planet itself can be studied. But it samples a biased population: bright, young, wide planets.`
  },
  {
    section: 'Microlensing', visual: 'lens', duration: 55,
    kicker: 'Method 3', title: 'Gravitational Lensing',
    subtitle: '',
    body: `<ul><li>A foreground lens object passes nearly in front of a background source star.</li><li>The lens gravity bends and magnifies the source light.</li><li>A planet around the lens can create a short extra anomaly in the light curve.</li></ul>`,
    notes: `This method is different because the planet is found through a brief alignment. The planet does not need to shine or transit; it perturbs the lensing geometry.`
  },
      {
    section: 'Microlensing', visual: 'lens', duration: 70,
    kicker: '', title: 'Forms of lensing',
    subtitle: '',
    image: 'images/GravitationalLensing.png',
    body: `There are three main kinds of gravitational lensing. <ul>
    <li>Strong lensing- where the lens is a large mass like a galaxy or galactic cluster and the geometry is favourable. The observer sees two or more separate images of the source. </li>
    <li>Weak lensing- where the lens is a large mass like above but the geometry is not as favourable. The image of the source will be mildly distorted- often getting smeared into a sort of arc centered on the center of the lens. </li>
    <li>Microlensing- where the lens is a small mass like a star. In such a case, the multiple images formed cannot be resolved even when the geometry is extremely favourable but the image of the source will appear to brighten briefly during the duration of the alignment. </li>
    </ul>`,
    notes: ``
  },
  {
    section: 'Microlensing', visual: 'lens', duration: 60,
    kicker: 'Lensing geometry', title: 'Lens bends light due to relativistic effects',
    image: 'images/einsteinRing.jpg',
    subtitle: 'Perfect alignment would produce an Einstein ring; near alignment produces multiple unresolved images and magnification.',
    body: `<div class="equation">$θ_E \\propto \\sqrt{M} \\times \\sqrt{\\frac{D_{LS}}{D_L\\times D_S}}$</div><ul><li>$θ_E$ can be used to set the angular scale of the lensing event.</li><li>The observed images are usually not resolved.</li><li>We detect the changing brightness instead.</li></ul>`,
    notes: `Keep the equation qualitative. The important idea is that the event has a characteristic scale related to the lens mass and distances. The telescope usually sees only a brighter source, not separated images.`
  },
  {
    section: 'Microlensing', visual: 'lens', duration: 70,
    kicker: 'Light curve', title: 'A planet adds a small spike or dip',
    subtitle: 'The main lens star creates a smooth brightening. The planet perturbs it briefly.',
    body: `<svg class="lightcurve" viewBox="0 0 520 250" role="img" aria-label="Microlensing light curve"><line class="graph-axis" x1="35" y1="210" x2="495" y2="210"/><line class="graph-axis" x1="35" y1="30" x2="35" y2="210"/><path class="graph-line" d="M35 205 C120 204, 160 180, 210 100 C245 42, 290 42, 324 104 C345 142, 348 90, 358 85 C370 80, 374 150, 390 170 C430 205, 470 205, 495 205"/><text class="graph-label" x="210" y="235">time</text><text class="graph-label" x="5" y="34">brightness</text></svg>`,
    notes: `Point to the smooth curve as the star lens and the short deviation as the planet. This is why networks of telescopes monitor dense star fields continuously.`
  },
  {
    section: 'Microlensing', visual: 'lens', duration: 60,
    kicker: 'Strengths', title: 'Strengths',
    subtitle: 'It is sensitive to faint hosts, distant systems and planets at several AU.',
    image: 'images/Gravitational_lens.gif',
    body: `<ul>
    <li>Rogue and dark planets can be spotted.</li> 
    <li>Very low mass planets down to the mass of the earth can be spotted as well (since even these low masses can have observable effects on brightness due to the nature of lensing) </li>
    </ul>`,
    notes: `Explain that microlensing is powerful for demographics, especially beyond the snow line. It is less dependent on the planet-star brightness contrast. Provided planet is beyond a certain threshold, the effect produced by it during lensing is nearly constant.`
  },
  {
    section: 'Microlensing', visual: 'lens', duration: 55, 
    kicker: 'Limits', title: 'Limitations',
    image: 'images/exoplanetsWithMicrolensing.png',
    subtitle: 'Once the lens-source alignment passes, the exact event is gone.',
    body: `Basically, an event such as this requires perfect alignment between the source, lens, and the observer and has no reason to recur. For earth-like planets, such events may only last 4-5 hours during which measurements must be taken quickly and without any chance of being able to repeat them. <ul><li>Follow-up must be rapid.</li><li>Orbital parameters are harder to refine than in repeated transits or RV curves since we will only get one set of data.</li></ul>`,
    notes: `Conclude by contrasting microlensing with periodic methods. It can find unique populations, but it is not as convenient for repeated measurements.`
  },
  {
    section: 'Astrometry', visual: 'astrometry', duration: 55,
    kicker: 'Method 4', title: 'Astrometry',
    subtitle: 'Astrometry involves directly observing the motion of a star about its barycenter in the celestial plane.',
    body: `<ul><li>The planet and star both orbit their common centre of mass.</li><li>We can try to directly measure the position shift in the sky.</li><li>The measurements should look like a tiny ellipse or wobble over time.</li></ul>`,
    notes: `This is the sky-plane counterpart of radial velocity. The star’s motion perpendicular to the line of sight becomes the observable.`
  },
  {
    section: 'Astrometry', visual: 'astrometry', duration: 70,
    kicker: 'Angular signal', title: 'Measurement difficulties',
    image: 'images/planetOrbitingBarycenter.gif',
    subtitle: 'For distant systems, the actual magnitude of the wobble is very small.',
    body: `Astrometry was in fact the first method used by astronomers to try and detect planets in the 19th century. However, the tools they possessed at the time were just not sophisticated enough to permit reliable measurements. The angular amplitude of the wobble is roughly given by this equation: <div class="equation">$\\alpha \\approx \\frac{M_p}{M_*} \\times \\frac{a}{d}$</div><ul><li>$\\alpha$: angular size of stellar wobble.</li><li>$\\frac{M_p}{M_*}$: planet-to-star mass ratio.</li><li>$a$: orbital size; $d$: distance to system.</li></ul>`,
    notes: `Explain the scaling. A massive planet pulls the star more. A wider orbit gives a bigger barycentric motion. A nearby system makes the same physical motion subtend a larger angle.`
  },
  {
    section: 'Astrometry', visual: 'astrometry', duration: 65,
    kicker: 'Separating motions', title: 'Real sky positions include many effects',
    image: 'images/astrometryDifficulties.png',
    subtitle: 'To find the planet wobble, astronomers must account for proper motion and parallax.',
    body: `<div class="cards"><div class="card"><h3>Proper motion</h3><p>The star drifts across the sky.</p></div><div class="card"><h3>Parallax</h3><p>Earth’s orbit creates an apparent annual shift.</p></div></div>
    <ul><li> A smaller periodic residual should remain after modelling the larger motions if a planet exists in the system.</li>
    <li>The basic issue is measuring angles at microarcsecond scales.</li>`,
    notes: `Use the same residual logic as pulsar timing. We remove known geometry first, then ask whether an orbital wobble remains.`
  },
  {
    section: 'Astrometry', visual: 'astrometry', duration: 55,
    kicker: 'What it gives', title: 'Advantages it offers',
    subtitle: 'Because it probes sky-plane motion, astrometry can help break inclination ambiguities.',
    body: `<ul><li>Best for nearby stars and massive planets in wider orbits.</li><li>Certain methods like radial velocity give us different answers depending on inclination. When used in conjunction with this method, we can solve for the true mass of a planet.</li></ul>`,
    notes: `Mention the payoff: radial velocity gives Mp sin i, but astrometry can help determine inclination, moving toward actual mass. Long orbital periods require long observing baselines`
  }, 
  {
    section: 'Transits', visual: 'transit', duration: 55,
    kicker: 'Method 5', title: 'Transit photometry',
    subtitle: 'Watch a star’s brightness and look for a planet crossing in front of it.',
    body: `<ul>
              <li>If the orbit is nearly edge-on, the planet blocks a small fraction of starlight.</li>
              <li>The result is a periodic dip in brightness.</li>
              <li>This is one of the most productive detection methods.</li>
              <li>Unlike many other detection methods, transit photometry can directly measure planetary radius and can be applied to thousands of stars simultaneously.</li>
              </ul>`,
    notes: `This is usually the easiest method for students to visualise. A planet passing in front of a star blocks light, so total brightness decreases.`
  },
  {
    section: 'Transits', duration: 70,
    kicker: 'Transit depth', title: 'The dip tells us the planet radius',
    subtitle: "The dimming equals planet's area compared to star's area.",
    body: `<div class="equation">δ ≈ (R<sub>p</sub> / R<sub>★</sub>)²</div><ul><li>δ is transit depth.</li><li>R<sub>p</sub> is planet radius.</li><li>R<sub>★</sub> is stellar radius.</li></ul><div class="callout">A Jupiter-sized planet blocks much more light than an Earth-sized planet.</div>`,
    image: 'images/Transit 3D.png',
    notes: `Emphasise that transits are excellent for radius. If stellar radius is known, the planet radius follows from the depth.`
  },
  {
    section: 'Transits', visual: 'transit2', duration: 65,
    kicker: 'Transit probability', title: 'Why Most Planets Don\'t Transit',
    subtitle: 'A transit is observed only when a planet\'s orbit is aligned.',
    body: `A transit is observed only when a planet's orbit is aligned so that it passes in front of its star as seen from Earth. Since planetary orbits can have many different orientations, only a small fraction of planets produce observable transits. <br> <div class="equation">P<sub>transit</sub> ≈ R<sub>★</sub> / a</div><ul><li>Close-in planets are more likely to transit.</li><li>Larger stars provide a larger target.</li><li>This introduces a strong detection bias toward short-period planets.</li></ul>`,
    notes: `Use hand gestures: the orbital plane has to be nearly edge-on. This geometric bias explains why transit surveys find many close-in planets.`
  },
  {
    section: 'Transits', duration: 70,
    kicker: 'Curve shape', title: 'A transit light curve has phases',
    subtitle: 'Ingress, full transit and egress encode geometry.',
    image: 'images/TransitLC.png',
    body: `<svg class="lightcurve" viewBox="0 0 520 250" role="img" aria-label="Transit light curve"><line class="graph-axis" x1="35" y1="210" x2="495" y2="210"/><line class="graph-axis" x1="35" y1="30" x2="35" y2="210"/><path class="graph-line" d="M40 70 L170 70 C190 72, 198 120, 218 132 L315 132 C336 121, 345 73, 368 70 L495 70"/><text class="graph-label" x="84" y="98">out of transit</text><text class="graph-label" x="225" y="164">blocked light</text><text class="graph-label" x="210" y="235">time</text><text class="graph-label" x="5" y="34">flux</text></svg><ul><li>Depth gives radius ratio.</li><li>Duration and shape constrain orbital geometry.</li><li>Period comes from repeated dips.</li></ul>`,
    notes: `Talk through the curve: flat baseline, ingress, bottom, egress, baseline. Repetition gives the orbital period.`
  },
  {
    section: 'Transits',  duration: 55,
    kicker: 'Limb darkening', title: 'Stars are not uniform disks',
     image: 'images/qr1.png',
    subtitle: 'The stellar edge appears dimmer than the centre, changing the exact transit shape.',
    body: `<ul><li>A planet blocks different brightness regions during transit.</li><li>Light curves become rounded rather than perfectly box-shaped.</li><li>Models must include stellar atmosphere effects.</li></ul>`,
    notes: `Explain visually: the centre of the star is brighter than the limb. During ingress/egress, the planet covers dimmer areas, so the curve shape contains more information.`
  },
  {
    section: 'Transits', visual: 'transit2', duration: 60,
    kicker: 'False positives', title: 'Not every dip is a planet',
    subtitle: 'Eclipsing binaries, starspots and instrumental systematics can imitate transit-like dips.',
    body: `<div class="cards"><div class="card"><h3>Eclipsing binary</h3><p>A stellar companion can produce periodic dips.</p></div><div class="card"><h3>Background blend</h3><p>A faint binary in the same pixel can dilute the signal.</p></div><div class="card"><h3>Starspots</h3><p>Rotating surface features modulate brightness.</p></div><div class="card"><h3>Confirmation</h3><p>Use RV, imaging, colour tests and repeated events.</p></div></div>`,
    notes: `This slide helps make detection scientific. A candidate is not automatically confirmed. Cross-checks matter.`
  },
  {
    section: 'Transits',  duration: 60,
    kicker: 'Atmospheres', title: 'Transits can probe atmospheres',
    image: 'images/Trappist1.png',
    subtitle: 'During transit, some starlight filters through the planet atmosphere before reaching us.',
    body: `<ul><li>Transmission spectroscopy compares in-transit and out-of-transit spectra.</li><li>Absorption features act as chemical fingerprints, revealing molecules such as H₂O, CO₂, CH₄ and Na.</li><li>Secondary eclipses and phase curves can probe thermal emission and reflection.</li></ul>`,
    notes: `Explain why this is exciting: transits provide more than size. With spectroscopy, they can reveal atmospheric composition and temperature structure.`
  },
  {
    section: 'Radial Velocity', duration: 55,
    image: 'images/doppler.png',
    kicker: 'Method 6', title: 'Radial velocity',
    subtitle: 'Measure the star’s line-of-sight wobble using Doppler shifts in its spectrum.',
    body: `<ul><li>Star moving toward us: spectral lines shift slightly blue.</li><li>Star moving away: lines shift slightly red.</li><li>A periodic shift suggests an orbiting companion.</li></ul>`,
    notes: `Connect to familiar Doppler effect examples: sirens, sound pitch, then light wavelength. Astronomers track tiny line shifts over time.`
  },
  {
    section: 'Radial Velocity',visual: 'rv', duration: 65,
    kicker: 'Barycentric orbit', title: 'The Star Wobbles??',
    subtitle: 'Both objects orbit the common centre of mass, but the star’s orbit is much smaller.',
    body: `<div class="equation">M<sub>★</sub> r<sub>★</sub> = M<sub>p</sub> r<sub>p</sub></div><ul><li>Massive planets create larger stellar wobble.</li><li>Close-in planets complete more cycles quickly.</li><li>Edge-on systems produce the strongest radial velocity signal.</li></ul>`,
    notes: `Show the wobble visual. Point out that the star does not sit perfectly still; it moves around the barycentre.`
  },
  {
    section: 'Radial Velocity', duration: 70,
    image: 'images/rvtheory.png',
    kicker: 'RV curve', title: 'The curve gives period, eccentricity and minimum mass',
    subtitle: 'A circular orbit gives an approximately sinusoidal velocity curve; eccentric orbits distort the shape.',
    body: `<svg class="lightcurve" viewBox="0 0 520 250" role="img" aria-label="Radial velocity curve"><line class="graph-axis" x1="35" y1="125" x2="495" y2="125"/><line class="graph-axis" x1="35" y1="30" x2="35" y2="210"/><path class="graph-line" d="M35 125 C72 45, 125 45, 165 125 C205 205, 258 205, 298 125 C338 45, 390 45, 430 125 C455 175, 478 190, 495 175"/><text class="graph-label" x="212" y="235">time</text><text class="graph-label" x="3" y="38">velocity</text></svg><ul><li>Period comes from repeating cycles.</li><li>Amplitude K relates to companion mass.</li><li>Shape reveals eccentricity information.</li></ul>`,
    notes: `Introduce K, the velocity semi-amplitude. Bigger K generally means a stronger pull, but the interpretation depends on stellar mass, period, eccentricity and inclination.`
  },
  {
    section: 'Radial Velocity', visual: 'rv', duration: 65,
    kicker: 'Inclination limit', title: 'Radial velocity gives M<sub>p</sub> sin(i)',
    subtitle: 'Because only line-of-sight motion is measured, the true mass depends on orbital inclination.',
    body: `<div class="equation">Measured mass ∝ M<sub>p</sub> sin(i)</div><ul><li>Edge-on orbit: sin(i) is near 1.</li><li>Face-on orbit: radial velocity is small or absent.</li><li>So RV often gives a minimum mass.</li></ul>`,
    notes: `This is one of the most important subtleties. A low observed RV amplitude could mean a low-mass planet or a more face-on orbit. Transits imply high inclination, so transit + RV is powerful.`
  },
  {
    section: 'Radial Velocity', duration: 60,
    kicker: 'Precision enemies', title: 'Stars are noisy too',
    image: 'images/51P.png',
    subtitle: 'Stellar activity can shift or distort spectral lines even without planets.',
    body: `<div class="cards"><div class="card"><h3>Starspots</h3><p>Rotating spots change the apparent line profile.</p></div><div class="card"><h3>Oscillations</h3><p>Stellar surfaces vibrate and convect.</p></div><div class="card"><h3>Instrument drift</h3><p>Spectrographs need extreme stability.</p></div><div class="card"><h3>Bisectors</h3><p>Line-shape diagnostics help separate activity from true motion.</p></div></div>`,
    notes: `Mention that modern RV is an instrumentation triumph. The velocities can be only metres per second or smaller, so calibration and stellar noise modelling matter a lot.`
  },
  {
    section: 'Radial Velocity', duration: 55,
    image: 'images/qr2.png',
    kicker: 'Discovery space', title: 'RV loves massive close-in planets',
    subtitle: 'Hot Jupiters were natural early targets because they make strong, fast stellar wobbles.',
    body: `<ul><li>Large planet mass increases the signal.</li><li>Short orbital period gives many cycles quickly.</li><li>Works best with sharp, stable stellar spectra.</li></ul>`,
    notes: `Tie back to 51 Pegasi b. The method was ideal for detecting a close-in giant planet around a Sun-like star.`
  },
  {
    section: 'Radial Velocity',
    duration: 55,
    image: 'images/TRV.png',
    kicker: 'Combining Methods',
    title: 'Transit + Radial Velocity',
    subtitle: 'Together, these methods provide both the size and mass of an exoplanet.',
    body: `<ul>
    <li>Transit photometry measures the planetary radius (R<sub>p</sub>) from the transit depth.</li>
    <li>Radial velocity measurements provide the planetary mass (M<sub>p</sub> sin i).</li>
    <li>For transiting planets, i ≈ 90°, so M<sub>p</sub> sin i ≈ M<sub>p</sub>.</li>
    <li>Combining mass and radius yields the planet's mean density, revealing whether it is rocky, gaseous or icy.</li>
    </ul>`,
    notes: `This is why transit and RV are often used together. Transit gives radius, RV gives mass. Combining both allows astronomers to determine density and infer planetary composition.`

  },
  {
    section: 'Combining Methods', visual: 'compass', duration: 60,
    kicker: 'Synthesis', title: 'No method sees the whole truth alone',
    subtitle: 'The strongest exoplanet results often combine multiple observables.',
    body: `<div class="cards"><div class="card"><h3>Transit + RV</h3><p>Radius + mass → density.</p></div><div class="card"><h3>Imaging + spectra</h3><p>Position + atmosphere.</p></div><div class="card"><h3>Astrometry + RV</h3><p>3D orbit and true mass.</p></div><div class="card"><h3>Transit timing</h3><p>Extra planets can disturb the timing of known transits.</p></div></div>`,
    notes: `This is the key practical slide. Planet science moves from detection to characterization by combining techniques.`
  },
  {
    section: 'Combining Methods', visual: 'compass', duration: 70,
    kicker: 'Comparison table', title: 'Each method has a favourite planet',
    subtitle: 'Selection effects shape what we discover.',
    body: `<div class="table-wrap"><table><tr><th>Method</th><th>Best targets</th><th>Main output</th><th>Major bias</th></tr><tr><td>Transit</td><td>Close-in edge-on systems</td><td>Radius, period</td><td>Needs alignment</td></tr><tr><td>Radial velocity</td><td>Massive close-in planets</td><td>Minimum mass, period</td><td>Weak for face-on or tiny planets</td></tr><tr><td>Direct imaging</td><td>Young warm wide giants</td><td>Light, spectra, orbit arc</td><td>Contrast and separation</td></tr><tr><td>Microlensing</td><td>Distant systems, planets at several AU</td><td>Mass ratio, event parameters</td><td>Usually one-time event</td></tr><tr><td>Astrometry</td><td>Nearby stars, wide massive planets</td><td>Sky-plane orbit, true mass help</td><td>Requires long precision monitoring</td></tr><tr><td>Pulsar timing</td><td>Stable cosmic clocks</td><td>Timing residual orbit</td><td>Rare host systems</td></tr></table></div>`,
    notes: `Read across one or two rows only, not the entire table. The purpose is to show the logic of biases.`
  },
  {
    section: 'Combining Methods', visual: 'orbit', duration: 55,
    kicker: 'Density', title: 'Mass + radius tells us what a planet may be made of',
    subtitle: 'Transit gives radius; RV can give mass. Together they estimate density.',
    body: `<div class="equation">ρ = M / [(4/3)πR³]</div><ul><li>High density can indicate rocky composition.</li><li>Low density can indicate gas-rich envelopes.</li><li>But composition models are degenerate without more data.</li></ul>`,
    notes: `Give examples conceptually: a rocky planet, water-rich planet and gas-rich mini-Neptune could overlap in radius. More constraints are needed.`
  },
  {
    section: 'Combining Methods', visual: 'transit', duration: 60,
    kicker: 'Habitability', title: 'The habitable zone is not a guarantee',
    subtitle: 'Being at the right distance for liquid water is only one ingredient.',
    body: `<ul><li>Star type and activity matter.</li><li>Atmosphere controls surface pressure and temperature.</li><li>Planet mass, rotation, magnetic environment and history matter.</li><li>Detection tells us where to look; characterization tells us what to believe.</li></ul>`,
    notes: `Avoid overselling habitability. The habitable zone is a useful first filter, not a conclusion that life exists.`
  },
  {
    section: 'Future', visual: 'neural', duration: 60,
    kicker: 'Technology', title: 'The future is precision and scale',
    subtitle: 'Exoplanet detection improves when telescopes, detectors and data pipelines improve together.',
    body: `<div class="cards"><div class="card"><h3>Space telescopes</h3><p>Stable observing platforms and access to wavelengths blocked by the atmosphere.</p></div><div class="card"><h3>Ground telescopes</h3><p>Huge apertures plus adaptive optics.</p></div><div class="card"><h3>Detector sensitivity</h3><p>Fainter signals and smaller planets.</p></div><div class="card"><h3>Networks</h3><p>Continuous monitoring for transits and microlensing events.</p></div></div>`,
    notes: `This slide transitions from established methods to future prospects. The bottleneck is often precision, not imagination.`
  },
  {
    section: 'Future', visual: 'neural', duration: 65,
    kicker: 'Machine learning', title: 'ML helps search huge datasets',
    subtitle: 'Modern surveys produce far more light curves and images than humans can inspect manually.',
    body: `<ul><li>Classify transit candidates and reject false positives.</li><li>Detect weak periodic signals in noisy data.</li><li>Flag unusual light curves for human follow-up.</li><li>Model systematics and improve automated pipelines.</li></ul>`,
    notes: `Be balanced. ML is not magic; it is a tool for pattern recognition and prioritisation. Training data, biases and validation matter.`
  },
  {
    section: 'Future', visual: 'neural', duration: 55,
    kicker: 'A typical ML pipeline', title: 'From raw light curve to candidate list',
    subtitle: 'A machine learning system still depends on careful astronomy features and validation.',
    body: `<div class="final-visual"><div class="final-step"><b>Clean data</b><span>01</span></div><div class="final-step"><b>Search periodic dips</b><span>02</span></div><div class="final-step"><b>Extract features</b><span>03</span></div><div class="final-step"><b>Classify candidates</b><span>04</span></div><div class="final-step"><b>Human + telescope follow-up</b><span>05</span></div></div>`,
    notes: `Explain that final confirmation still requires physical interpretation and often follow-up observations.`
  },
  {
    section: 'Future', visual: 'imaging', duration: 60,
    kicker: 'Next frontier', title: 'Atmospheres and biosignatures',
    subtitle: 'The question is shifting from “is there a planet?” to “what kind of planet is it?”',
    body: `<ul><li>Transmission spectra can reveal atmospheric absorption.</li><li>Direct spectra can probe young giant planets.</li><li>Future missions may target Earth-like planets around nearby stars.</li><li>Potential biosignatures require careful context and skepticism.</li></ul>`,
    notes: `End the future section with excitement but caution. A molecule alone is rarely a final answer; context matters.`
  },
  {
    section: 'Activity', visual: 'imaging', duration: 60,
    kicker: 'Audience check', title: 'Which method would you choose?',
    subtitle: 'Match the signal to the best detection method.',
    body: `<div class="cards"><div class="card"><h3>Periodic 1% brightness dip</h3><p>Likely transit.</p></div><div class="card"><h3>Spectral lines shift every 4 days</h3><p>Likely radial velocity.</p></div><div class="card"><h3>Short spike during a one-time brightening</h3><p>Likely microlensing planet anomaly.</p></div><div class="card"><h3>Faint dot beside a young star</h3><p>Likely direct imaging candidate.</p></div></div>`,
    notes: `Use this as an interactive pause. Ask the audience before revealing answers, or read them one by one.`
  },
  {
    section: 'Activity', visual: 'imaging', duration: 65,
    kicker: 'Decision tree', title: 'Think observable first',
    subtitle: 'When confused, ask what is changing in the data.',
    body: `<div class="final-visual"><div class="final-step"><b>Brightness dip repeats?</b><span>Transit</span></div><div class="final-step"><b>Spectral lines oscillate?</b><span>RV</span></div><div class="final-step"><b>Sky position wobbles?</b><span>Astrometry</span></div><div class="final-step"><b>Pulse arrival times shift?</b><span>Timing</span></div><div class="final-step"><b>Background star briefly magnified?</b><span>Lensing</span></div><div class="final-step"><b>Faint source near star?</b><span>Imaging</span></div></div>`,
    notes: `This is a concise summary of the whole talk. It can also be used if time is running short.`
  },
  {
    section: 'Recap', visual: 'orbit', duration: 55,
    kicker: 'Key idea 1', title: 'Planets reveal themselves indirectly',
    subtitle: 'A planet can be invisible and still leave a measurable fingerprint.',
    body: `<ul><li>Gravity moves the star.</li><li>Geometry blocks light.</li><li>Relativity bends light.</li><li>Atmospheres filter light.</li><li>Technology turns tiny changes into discoveries.</li></ul>`,
    notes: `Begin the final recap. The audience should leave with the concept that detection is inference from physical effects.`
  },
  {
    section: 'Recap', visual: 'imaging', duration: 60,
    kicker: 'Key idea 2', title: 'Bias is built into every survey',
    subtitle: 'The planets we detect most easily are not necessarily the planets that are most common.',
    body: `<div class="callout">Always ask: what kind of planet would this method miss?</div><ul><li>Transit misses most non-aligned systems.</li><li>RV struggles with low-mass or face-on planets.</li><li>Imaging struggles with close, faint planets.</li><li>Microlensing events are hard to repeat.</li></ul>`,
    notes: `This is a scientific thinking slide. Selection effects are not errors; they are part of interpretation.`
  },
  {
    section: 'Recap', visual: 'imaging', duration: 55,
    kicker: 'Key idea 3', title: 'Confirmation needs consistency',
    subtitle: 'The same planet should make sense across models, methods and follow-up observations.',
    body: `<ul><li>Repeatability matters for periodic methods.</li><li>Independent methods reduce false positives.</li><li>Physical parameters must be plausible together.</li><li>The strongest discoveries survive alternative explanations.</li></ul>`,
    notes: `Emphasise scientific caution. A signal is only a candidate until it survives checks.`
  },
  {
    section: 'Recap',  duration: 70,
    kicker: 'Closing', title: 'The exoplanet hunt is a measurement problem',
    subtitle: 'From tiny dips to tiny wobbles, the universe gives us signals — the art is knowing which physical story produced them.',
     notes: `End with the broader narrative: detection is the entry point. Characterization and population statistics are what make exoplanets a major field.`
  },
  {
    section: 'Recap', duration: 45,
    kicker: 'Thank you', title: 'Questions?',
    subtitle: ' ',
    notes: `Use this final slide to invite questions. If there is extra time, ask the audience to design an observing strategy for a target star.`
  }
];

const chapters = [...new Set(slides.map(s => s.section))];
let current = 0;
let wheelLock = false;
let notesOpen = false;
let mapOpen = false;
let burst = 0;

const deck = document.getElementById('deck');
const counter = document.getElementById('counter');
const progressLine = document.getElementById('progressLine');
const chapterRail = document.getElementById('chapterRail');
const slideMap = document.getElementById('slideMap');
const mapGrid = document.getElementById('mapGrid');
const speakerNotes = document.getElementById('speakerNotes');
const notesContent = document.getElementById('notesContent');

function pad(n) { return String(n).padStart(2, '0'); }

function visualMarkup(type) {
  switch (type) {
    case 'transit': return `<div class="transit-system"><div class="transit-star"><span class="transit-planet"></span></div><svg class="lightcurve" viewBox="0 0 520 250"><line class="graph-axis" x1="35" y1="210" x2="495" y2="210"/><line class="graph-axis" x1="35" y1="30" x2="35" y2="210"/><path class="graph-line" d="M40 70 L175 70 C190 75, 205 132, 230 134 L302 134 C327 132, 342 75, 360 70 L495 70"/><text class="graph-label" x="210" y="235">time</text><text class="graph-label" x="7" y="38">flux</text></svg></div>`;
    case 'transit2': return `<div class="transit2-system"><div class="transit2-star"><span class="transit2-planet planet-1"></span><span class="transit2-planet planet-2"></span></div><svg class="lightcurve" viewBox="0 0 520 250"><line class="graph-axis" x1="35" y1="210" x2="495" y2="210"/><line class="graph-axis" x1="35" y1="30" x2="35" y2="210"/><path class="graph-line2" d="M40 70 L175 70 C190 75, 205 132, 230 134 L302 134 C327 132, 342 75, 360 70 L495 70"/><text class="graph-label" x="210" y="235">time</text><text class="graph-label" x="7" y="38">flux</text></svg></div>`;
    case 'rv': return `<div class="rv-visual"><div class="wobble"><span class="bary"></span><span class="w-star"></span><span class="w-planet"></span></div><div class="spectrum"><span class="spectral-line"></span><span class="spectral-line"></span><span class="spectral-line"></span><span class="spectral-line"></span></div></div>`;
    case 'trv': return `<div class="transit-system"><div class="transit-star"><span class="transit-planet"></span></div><div class="spectrum"><span class="spectral-line"></span><span class="spectral-line"></span><span class="spectral-line"></span><span class="spectral-line"></span></div></div>`;
    case 'lens': return `<div class="lens-visual"><div class="lens-row"><span class="source-star"></span><span class="light-ray r1"></span><span class="light-ray r2"></span><span class="lens-star"></span><span class="einstein-ring"></span><span class="observer"></span></div><svg class="lightcurve" viewBox="0 0 520 250"><line class="graph-axis" x1="35" y1="210" x2="495" y2="210"/><line class="graph-axis" x1="35" y1="30" x2="35" y2="210"/><path class="graph-line" d="M35 205 C130 204, 180 175, 225 92 C258 32, 300 48, 326 107 C340 139, 348 88, 360 84 C371 80, 375 151, 395 176 C425 205, 475 205, 495 205"/></svg></div>`;
    case 'pulsar': return `<div class="pulsar-visual"><span class="pulsar-beam"></span><span class="pulsar-core"></span><span class="orbit-ring"></span><span class="orbit-ring r2"></span><span class="planet-dot p2"></span><span class="pulse-wave"></span></div>`;
    case 'astrometry': return `<div class="astrometry-visual"><span class="wobble-trace"></span><span class="sky-star"></span></div>`;
    case 'imaging': return `<div class="imaging-visual"><span class="glare"></span><span class="coronagraph"></span><span class="faint-planet"></span></div>`;
    case 'neural': return `<div class="neural-visual"><svg class="neural-svg" viewBox="0 0 360 330"><line x1="53" y1="40" x2="162" y2="106"/><line x1="65" y1="191" x2="162" y2="106"/><line x1="162" y1="106" x2="245" y2="46"/><line x1="162" y1="106" x2="274" y2="218"/><line x1="153" y1="257" x2="274" y2="218"/><line x1="65" y1="191" x2="153" y2="257"/><line x1="245" y1="46" x2="274" y2="218"/></svg><span class="neural-node"></span><span class="neural-node"></span><span class="neural-node"></span><span class="neural-node"></span><span class="neural-node"></span><span class="neural-node"></span></div>`;
    case 'compass': return `<div class="method-compass">
        <div class="method-node">Transit</div>
        <div class="method-node">RV</div>
        <div class="method-node">Imaging</div>
        <div class="method-node">Lensing</div>
        <div class="method-node">Timing</div>
        <div class="method-node">Astrometry</div>
        <div class="method-node">Orbital Brightness</div>
        <div class="method-node">Exoplanet <br> Detection</div>
        </div>`;
    case 'final': return `<div class="final-visual"><div class="final-step"><b>Question</b><span>why?</span></div><div class="final-step"><b>Observable</b><span>what?</span></div><div class="final-step"><b>Model</b><span>how?</span></div><div class="final-step"><b>Planet</b><span>found</span></div></div>`;
    case 'orbit':
    default: return `<div class="orbit-visual"><span class="orbit-ring"></span><span class="orbit-ring r2"></span><span class="star-core"></span><span class="planet-dot"></span><span class="planet-dot p2"></span></div>`;
  }
}

function render() {
deck.innerHTML = slides.map((slide, i) => `
  <section class="slide" data-index="${i}" data-section="${slide.section}">
    <div class="slide-content">
      <p class="eyebrow">${slide.kicker || slide.section}</p>
      ${i === 0 ? `<h1>${slide.title}</h1>` : `<h2>${slide.title}</h2>`}
      <p class="subtitle">${slide.subtitle}</p>
      <div class="body">${slide.body || ''}</div>
    </div>

    <div class="visual-card" aria-hidden="true">
      <div class="visual-inner">
        ${
          slide.image
            ? `<img class="slide-photo" src="${slide.image}" alt="">`
            : visualMarkup(slide.visual)
        }
      </div>
      <span class="slide-number">
        ${pad(i + 1)} / ${pad(slides.length)}
      </span>
    </div>
  </section>
`).join('');

  chapterRail.innerHTML = chapters.map((ch, i) => {
    const firstIndex = slides.findIndex(s => s.section === ch);
    return `<button class="chapter-dot" data-target="${firstIndex}" aria-label="${ch}"><span>${ch}</span></button>`;
  }).join('');

  mapGrid.innerHTML = slides.map((slide, i) => `<button class="map-tile" data-target="${i}"><small>${pad(i + 1)} · ${slide.section}</small><strong>${slide.title}</strong></button>`).join('');

  document.querySelectorAll('[data-target]').forEach(btn => btn.addEventListener('click', () => {
    goTo(Number(btn.dataset.target));
    closeMap();
  }));
  update();
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
}

function update() {
  document.querySelectorAll('.slide').forEach((el, i) => {
    el.classList.toggle('active', i === current);
    el.classList.toggle('past', i < current);
  });
  counter.textContent = `${pad(current + 1)} / ${pad(slides.length)}`;
  progressLine.style.width = `${((current + 1) / slides.length) * 100}%`;
  document.title = `${pad(current + 1)} · ${slides[current].title} | Exoplanet Detection`;
  location.hash = `slide-${pad(current + 1)}`;

  const currentChapter = slides[current].section;
  document.querySelectorAll('.chapter-dot').forEach(dot => {
    const target = Number(dot.dataset.target);
    dot.classList.toggle('active', slides[target].section === currentChapter);
  });
  document.querySelectorAll('.map-tile').forEach((tile, i) => tile.classList.toggle('active', i === current));

  notesContent.innerHTML = `<p>${slides[current].notes || 'Use this slide as a visual pause.'}</p>`;
  burst = 1;
}

function goTo(index) {
  const next = Math.max(0, Math.min(slides.length - 1, index));
  if (next === current) return;
  current = next;
  update();
}
function next() { goTo(current + 1); }
function prev() { goTo(current - 1); }
function openMap() { mapOpen = true; slideMap.classList.add('open'); slideMap.setAttribute('aria-hidden', 'false'); }
function closeMap() { mapOpen = false; slideMap.classList.remove('open'); slideMap.setAttribute('aria-hidden', 'true'); }
function toggleMap() { mapOpen ? closeMap() : openMap(); }
function toggleNotes() { notesOpen = !notesOpen; speakerNotes.classList.toggle('open', notesOpen); speakerNotes.setAttribute('aria-hidden', String(!notesOpen)); }

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeMap(); if (notesOpen) toggleNotes(); return; }
  if (mapOpen && ['ArrowDown','ArrowUp','ArrowLeft','ArrowRight',' '].includes(e.key)) return;
  if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(e.key)) { e.preventDefault(); next(); }
  if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
  if (e.key === 'Home') { e.preventDefault(); goTo(0); }
  if (e.key === 'End') { e.preventDefault(); goTo(slides.length - 1); }
  if (e.key.toLowerCase() === 'o') toggleMap();
  if (e.key.toLowerCase() === 'n') toggleNotes();
  if (e.key.toLowerCase() === 'f') document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen?.();
});

/*window.addEventListener('wheel', (e) => {
  if (mapOpen) return;
  e.preventDefault();
  if (wheelLock) return;
  wheelLock = true;
  e.deltaY > 0 ? next() : prev();
  setTimeout(() => wheelLock = false, 720);
}, { passive: false });
*/

let touchStartY = null;
window.addEventListener('touchstart', (e) => { touchStartY = e.changedTouches[0].clientY; }, { passive: true });
window.addEventListener('touchend', (e) => {
  if (touchStartY === null) return;
  const dy = e.changedTouches[0].clientY - touchStartY;
  if (Math.abs(dy) > 60) dy < 0 ? next() : prev();
  touchStartY = null;
}, { passive: true });

document.getElementById('menuBtn').addEventListener('click', toggleMap);
document.getElementById('closeMap').addEventListener('click', closeMap);
document.getElementById('notesBtn').addEventListener('click', toggleNotes);
document.getElementById('closeNotes').addEventListener('click', toggleNotes);
slideMap.addEventListener('click', (e) => { if (e.target === slideMap) closeMap(); });

// Canvas starfield and chapter-specific animations
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');
let W = 0, H = 0, DPR = 1;
let stars = [];
let t = 0;

function resize() {
  DPR = Math.min(window.devicePixelRatio || 1, 2);
  W = canvas.width = Math.floor(innerWidth * DPR);
  H = canvas.height = Math.floor(innerHeight * DPR);
  canvas.style.width = innerWidth + 'px';
  canvas.style.height = innerHeight + 'px';
  stars = Array.from({ length: Math.min(360, Math.floor(innerWidth * innerHeight / 4200)) }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    z: Math.random() * 1 + .25,
    r: Math.random() * 1.4 + .2,
    vx: (Math.random() - .5) * .06,
    vy: (Math.random() - .5) * .06,
    tw: Math.random() * Math.PI * 2
  }));
}
window.addEventListener('resize', resize);
resize();

function bgForSection(section) {
  const palettes = {
    'Opening': ['#081326', '#130b2c'],
    'Basics': ['#061324', '#0d1d35'],
    'History': ['#120c2c', '#20113f'],
    'Pulsar Timing': ['#061629', '#101c52'],
    'Direct Imaging': ['#1a1206', '#2a1026'],
    'Microlensing': ['#081421', '#1b1738'],
    'Astrometry': ['#061820', '#0d2733'],
    'Transits': ['#0b1428', '#28133a'],
    'Radial Velocity': ['#120a22', '#031929'],
    'Combining Methods': ['#071023', '#192449'],
    'Future': ['#061b1c', '#11123e'],
    'Activity': ['#161426', '#0c1d2a'],
    'Recap': ['#050b16', '#17112b']
  };
  return palettes[section] || palettes.Opening;
}

function drawBackground() {
  const section = slides[current].section;
  const [c1, c2] = bgForSection(section);
  const grad = ctx.createLinearGradient(0, 0, W, H);
  grad.addColorStop(0, c1);
  grad.addColorStop(1, c2);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  const cx = W * .5, cy = H * .5;
  const warp = burst;
  for (const s of stars) {
    const dx = s.x - cx;
    const dy = s.y - cy;
    s.x += s.vx * DPR + dx * 0.0022 * warp;
    s.y += s.vy * DPR + dy * 0.0022 * warp;
    if (s.x < 0 || s.x > W || s.y < 0 || s.y > H) { s.x = Math.random() * W; s.y = Math.random() * H; }
    const alpha = 0.45 + 0.45 * Math.sin(t * .03 + s.tw);
    ctx.beginPath();
    ctx.fillStyle = `rgba(255,255,255,${alpha * s.z})`;
    ctx.arc(s.x, s.y, s.r * DPR * s.z * (1 + warp * .7), 0, Math.PI * 2);
    ctx.fill();
    if (warp > .05) {
      ctx.strokeStyle = `rgba(125,211,252,${0.26 * warp})`;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - dx * .035 * warp, s.y - dy * .035 * warp);
      ctx.stroke();
    }
  }

  drawMode(section);
  burst *= .92;
  if (burst < .01) burst = 0;
  t++;
  requestAnimationFrame(drawBackground);
}

function drawMode(section) {
  ctx.save();
  ctx.globalCompositeOperation = 'lighter';
  const time = t / 60;
  if (section === 'Pulsar Timing') drawPulsarMode(time);
  else if (section === 'Transits') drawTransitMode(time);
  else if (section === 'Radial Velocity') drawRVMode(time);
  else if (section === 'Microlensing') drawLensMode(time);
  else if (section === 'Astrometry') drawAstroMode(time);
  else if (section === 'Direct Imaging') drawImagingMode(time);
  else if (section === 'Future') drawNeuralMode(time);
  else drawConstellationMode(time);
  ctx.restore();
}

function drawConstellationMode(time) {
  const pts = stars.slice(0, 18);
  ctx.strokeStyle = 'rgba(125,211,252,.10)';
  ctx.lineWidth = DPR;
  for (let i = 0; i < pts.length - 1; i++) {
    if (i % 3 !== 0) continue;
    ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[i+1].x, pts[i+1].y); ctx.stroke();
  }
}
function drawPulsarMode(time) {
  const x = W * .82, y = H * .25;
  ctx.translate(x, y); ctx.rotate(time * 2.6);
  const grd = ctx.createLinearGradient(-180*DPR, 0, 180*DPR, 0);
  grd.addColorStop(0, 'transparent'); grd.addColorStop(.5, 'rgba(103,232,249,.24)'); grd.addColorStop(1, 'transparent');
  ctx.fillStyle = grd; ctx.fillRect(-220*DPR, -18*DPR, 440*DPR, 36*DPR);
  ctx.beginPath(); ctx.fillStyle = 'rgba(103,232,249,.55)'; ctx.arc(0, 0, 18*DPR, 0, Math.PI*2); ctx.fill();
}
function drawTransitMode(time) {
  const x = W * .82, y = H * .30, R = 52*DPR;
  const px = x + Math.sin(time * 1.5) * 95 * DPR;
  ctx.beginPath(); ctx.fillStyle = 'rgba(252,211,77,.35)'; ctx.arc(x, y, R, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.fillStyle = 'rgba(2,6,18,.95)'; ctx.arc(px, y, 13*DPR, 0, Math.PI*2); ctx.fill();
}
function drawRVMode(time) {
  const baseX = W * .81, baseY = H * .27;
  ctx.strokeStyle = 'rgba(125,211,252,.16)'; ctx.lineWidth = 2*DPR; ctx.beginPath();
  for (let i=0;i<260;i++){ const x=baseX-130*DPR+i*DPR; const y=baseY + Math.sin(i/22 + time*2)*34*DPR; i?ctx.lineTo(x,y):ctx.moveTo(x,y); } ctx.stroke();
}
function drawLensMode(time) {
  const x = W * .82, y = H * .28;
  for (let r=40; r<110; r+=22) { ctx.beginPath(); ctx.strokeStyle = `rgba(125,211,252,${.14 + .06*Math.sin(time+r)})`; ctx.arc(x, y, (r + Math.sin(time*2)*8)*DPR, 0, Math.PI*2); ctx.stroke(); }
}
function drawAstroMode(time) {
  const x = W * .82, y = H * .28;
  ctx.strokeStyle = 'rgba(134,239,172,.20)'; ctx.setLineDash([6*DPR, 8*DPR]); ctx.beginPath(); ctx.ellipse(x, y, 70*DPR, 38*DPR, .3, 0, Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
  ctx.beginPath(); ctx.fillStyle = 'rgba(252,211,77,.45)'; ctx.arc(x + Math.cos(time*2)*70*DPR, y + Math.sin(time*2)*38*DPR, 8*DPR, 0, Math.PI*2); ctx.fill();
}
function drawImagingMode(time) {
  const x = W * .82, y = H * .28;
  const g = ctx.createRadialGradient(x,y,0,x,y,160*DPR); g.addColorStop(0,'rgba(255,255,255,.25)'); g.addColorStop(.28,'rgba(252,211,77,.18)'); g.addColorStop(1,'transparent'); ctx.fillStyle=g; ctx.beginPath(); ctx.arc(x,y,160*DPR,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.fillStyle='rgba(2,6,18,.75)'; ctx.arc(x,y,34*DPR,0,Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.fillStyle='rgba(125,211,252,.55)'; ctx.arc(x+105*DPR,y+Math.sin(time*2)*10*DPR,5*DPR,0,Math.PI*2); ctx.fill();
}
function drawNeuralMode(time) {
  const nodes = [[.77,.18],[.87,.29],[.78,.43],[.90,.55],[.80,.70],[.68,.55],[.68,.31]];
  ctx.strokeStyle = 'rgba(125,211,252,.13)'; ctx.lineWidth = DPR;
  for (let i=0;i<nodes.length-1;i++){ ctx.beginPath(); ctx.moveTo(nodes[i][0]*W,nodes[i][1]*H); ctx.lineTo(nodes[i+1][0]*W,nodes[i+1][1]*H); ctx.stroke(); }
  nodes.forEach((p,i)=>{ ctx.beginPath(); ctx.fillStyle=`rgba(192,132,252,${.25+.2*Math.sin(time*2+i)})`; ctx.arc(p[0]*W,p[1]*H,(7+2*Math.sin(time+i))*DPR,0,Math.PI*2); ctx.fill(); });
}

render();
const hash = location.hash.match(/slide-(\d+)/);
if (hash) goTo(Number(hash[1]) - 1);
drawBackground();
