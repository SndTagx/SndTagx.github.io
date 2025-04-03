document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const elements = {
        mainButton: document.getElementById('mainButton'),
        upgradeButton: document.getElementById('upgradeButton'),
        rebirthButton: document.getElementById('rebirthButton'),
        coinCount: document.getElementById('coinCount'),
        coinIcon: document.getElementById('coinIcon'),
        upgradeCostLabel: document.getElementById('upgradeCostLabel'),
        upgradeCountLabel: document.getElementById('upgradeCountLabel'),
        rebirthCostLabel: document.getElementById('rebirthCostLabel'),
        rebirthCountLabel: document.getElementById('rebirthCountLabel'),
        skinPanelToggle: document.getElementById('skinPanelToggle'),
        skinPanel: document.getElementById('skinPanel'),
        skinPages: document.getElementById('skinPages'),
        prevPage: document.getElementById('prevPage'),
        nextPage: document.getElementById('nextPage'),
        pageIndicator: document.getElementById('pageIndicator'),
        achievementsToggle: document.getElementById('achievementsToggle'),
        achievementsPanel: document.getElementById('achievementsPanel'),
        achievementPages: document.getElementById('achievementPages'),
        achPrevPage: document.getElementById('achPrevPage'),
        achNextPage: document.getElementById('achNextPage'),
        achPageIndicator: document.getElementById('achPageIndicator'),
        dailyRewardsToggle: document.getElementById('dailyRewardsToggle'),
        dailyRewardsPanel: document.getElementById('dailyRewardsPanel'),
        settingsToggle: document.getElementById('settingsToggle'),
        settingsPanel: document.getElementById('settingsPanel'),
        shopToggle: document.getElementById('shopToggle'),
        shopPanel: document.getElementById('shopPanel'),
        shopPages: document.getElementById('shopPages'),
        shopPrevPage: document.getElementById('shopPrevPage'),
        shopNextPage: document.getElementById('shopNextPage'),
        shopPageIndicator: document.getElementById('shopPageIndicator'),
        shopTimer: document.getElementById('shopTimer'),
        clickSound: document.getElementById('clickSound'),
        comboCounter: document.getElementById('comboCounter'),
        levelDisplay: document.getElementById('levelDisplay'),
        adminPanel: document.getElementById('adminPanel'),
        clickArea: document.getElementById('clickArea'),
        adminCloseButton: document.getElementById('adminCloseButton'),
        skinNotification: document.getElementById('skinNotification'),
        achievementsNotification: document.getElementById('achievementsNotification'),
        dailyNotification: document.getElementById('dailyNotification'),
        shopNotification: document.getElementById('shopNotification'),
        jumpscare: document.getElementById('jumpscare'),
        debugToggle: document.getElementById('debugToggle'),
        debugStats: document.getElementById('debugStats'),
        themeSelect: document.getElementById('themeSelect'),
        exportSaveButton: document.getElementById('exportSave'),
        importSaveButton: document.getElementById('importSave'),
        exportSaveText: document.getElementById('exportSaveText'),
        importSaveText: document.getElementById('importSaveText'),
        resetGameButton: document.getElementById('resetGame'),
        // Admin Panel Elements
        setCoins: document.getElementById('setCoins'),
        adminCoins: document.getElementById('adminCoins'),
        setCoinsPerClick: document.getElementById('setCoinsPerClick'),
        adminCoinsPerClick: document.getElementById('adminCoinsPerClick'),
        setUpgrades: document.getElementById('setUpgrades'),
        adminUpgrades: document.getElementById('adminUpgrades'),
        setUpgradeCost: document.getElementById('setUpgradeCost'),
        adminUpgradeCost: document.getElementById('adminUpgradeCost'),
        setRebirths: document.getElementById('setRebirths'),
        adminRebirths: document.getElementById('adminRebirths'),
        setRebirthCost: document.getElementById('setRebirthCost'),
        adminRebirthCost: document.getElementById('adminRebirthCost'),
        setCombo: document.getElementById('setCombo'),
        adminCombo: document.getElementById('adminCombo'),
        setDailyRewards: document.getElementById('setDailyRewards'),
        adminDailySet: document.getElementById('adminDailySet'),
        setSkins: document.getElementById('setSkins'),
        adminSkins: document.getElementById('adminSkins'),
        setAchievements: document.getElementById('setAchievements'),
        adminAchievements: document.getElementById('adminAchievements'),
        toggleAutoclickDetect: document.getElementById('toggleAutoclickDetect'),
        adminAutoclickDetect: document.getElementById('adminAutoclickDetect'),
        setClicksPerSec: document.getElementById('setClicksPerSec'),
        adminClicksPerSec: document.getElementById('adminClicksPerSec'),
        setLevel: document.getElementById('setLevel'),
        adminLevel: document.getElementById('adminLevel'),
        setShopRefresh: document.getElementById('setShopRefresh'),
        adminShopRefresh: document.getElementById('adminShopRefresh'),
        setCoinsPerSec: document.getElementById('setCoinsPerSec'),
        adminCoinsPerSec: document.getElementById('adminCoinsPerSec'),
        setComboBoost: document.getElementById('setComboBoost'),
        adminComboBoost: document.getElementById('adminComboBoost'),
        setTempBoost: document.getElementById('setTempBoost'),
        adminTempBoostDuration: document.getElementById('adminTempBoostDuration'),
        setTotalClicks: document.getElementById('setTotalClicks'),
        adminTotalClicks: document.getElementById('adminTotalClicks'),
        setTotalCoinsEarned: document.getElementById('setTotalCoinsEarned'),
        adminTotalCoinsEarned: document.getElementById('adminTotalCoinsEarned'),
        clearTempBoosts: document.getElementById('clearTempBoosts'),
        resetShopQuantities: document.getElementById('resetShopQuantities'),
        maxShopPurchases: document.getElementById('maxShopPurchases'),
        triggerJumpscare: document.getElementById('triggerJumpscare'),
        forceShopRefresh: document.getElementById('forceShopRefresh'),
        unlockAllSkins: document.getElementById('unlockAllSkins'),
        completeAllAchievements: document.getElementById('completeAllAchievements'),
        resetDailyRewards: document.getElementById('resetDailyRewards'),
    };

    // Game Data and Constants
    const skins = [
        { skin: "Skins/SvetlanaSkin.jpg", cost: 0, name: "🔢Svetlana (Free)", sound: "Sounds/SvetlanaSkin.mp3" },
        { skin: "Skins/LeshaSkin.jpg", cost: 1, name: "😍Lesha (1)", sound: "Sounds/LeshaSkin.mp3" },
        { skin: "Skins/RomanSkin.jpg", cost: 10000, name: "👨‍❤️‍👨Roman (10000)", sound: "Sounds/RomanSkin.mp3" },
        { skin: "Skins/ElenaSkin.jpg", cost: 30000, name: "🦛Elena (30000)", sound: "Sounds/ElenaSkin.mp3" },
        { skin: "Skins/KirillSkin.jpg", cost: 50000, name: "🪨Kirill (50000)", sound: "Sounds/KirillSkin.mp3" },
        { skin: "Skins/MatveiSkin.jpg", cost: 75000, name: "🍖Matvei (75000)", sound: "Sounds/MatveiSkin.mp3" },
        { skin: "Skins/FilipinkoSkin.jpg", cost: 100000, name: "🎨Fillipinko (100000)", sound: "Sounds/FilipinkoSkin.mp3" },
        { skin: "Skins/SobakaSkin.jpg", cost: 130000, name: "🐻Sobaka (130000)", sound: "Sounds/SobakaSkin.mp3" },
        { skin: "Skins/KotSkin.jpg", cost: 175000, name: "🦁Kot (175000)", sound: "Sounds/KotSkin.mp3" },
        { skin: "Skins/DuraSkin.jpg", cost: 200000, name: "📑Dura (200000)", sound: "Sounds/DuraSkin.mp3" },
    ];

    const achievements = [
        { id: 1, name: "Новичок", type: "coins", goal: 10000, reward: 5000, desc: "Собери 10000 монет" },
        { id: 2, name: "Кликовый мастер", type: "coins", goal: 100000, reward: 20000, desc: "Собери 100000 монет" },
        { id: 3, name: "Улучшатор", type: "upgrades", goal: 25, reward: 50000, desc: "Купи 25 улучшений" },
        { id: 4, name: "Возрождённый", type: "rebirths", goal: 1, reward: 100000, desc: "Соверши 1 перерождение" },
        { id: 5, name: "Комбо-гуру", type: "combo", goal: 3, reward: 150000, desc: "Достигни комбо 3x" },
        { id: 6, name: "Монетный магнат", type: "coins", goal: 500000, reward: 75000, desc: "Собери 500000 монет" },
        { id: 7, name: "Улучшение эксперта", type: "upgrades", goal: 50, reward: 100000, desc: "Купи 50 улучшений" },
        { id: 8, name: "Дважды рождённый", type: "rebirths", goal: 2, reward: 200000, desc: "Соверши 2 перерождения" },
        { id: 9, name: "Миллионер", type: "coins", goal: 1000000, reward: 150000, desc: "Собери 1M монет" },
        { id: 10, name: "Мастер кликов", type: "coins", goal: 5000000, reward: 500000, desc: "Собери 5M монет" },
        { id: 11, name: "Улучшатор-эпик", type: "upgrades", goal: 100, reward: 250000, desc: "Купи 100 улучшений" },
        { id: 12, name: "Трижды рождённый", type: "rebirths", goal: 3, reward: 400000, desc: "Соверши 3 перерождения" },
        { id: 13, name: "Богач", type: "coins", goal: 10000000, reward: 1000000, desc: "Собери 10M монет" },
        { id: 14, name: "Улучшение титана", type: "upgrades", goal: 200, reward: 500000, desc: "Купи 200 улучшений" },
        { id: 15, name: "Пять перерождений", type: "rebirths", goal: 5, reward: 750000, desc: "Соверши 5 перерождений" },
        { id: 16, name: "Мультимиллионер", type: "coins", goal: 50000000, reward: 2000000, desc: "Собери 50M монет" },
        { id: 27, name: "Улучшение бога", type: "upgrades", goal: 500, reward: 1500000, desc: "Купи 500 улучшений" },
        { id: 28, name: "Вечный возрождённый", type: "rebirths", goal: 10, reward: 3000000, desc: "Соверши 10 перерождений" },
        { id: 29, name: "Пудж Найден", type: "skin", goal: "Skins/KirillSkin.jpg", reward: 50000, desc: "Найди и купи пуджа" },
    ];

    const dailyRewards = [
        { day: 1, reward: 1000 },
        { day: 2, reward: 10000 },
        { day: 3, reward: 25000 },
        { day: 4, reward: 50000 },
        { day: 5, reward: 75000 },
        { day: 6, reward: 100000 },
        { day: 7, reward: 200000 },
        { day: 8, reward: 500000 },
    ];

    const CLICK_THRESHOLD = 10;
    const TIME_THRESHOLD = 1000;
    const MIN_INTERVAL = 50;
    const CONSISTENT_THRESHOLD = 20;
    const INTERVAL_TOLERANCE = 5;
    const MAX_COMBO_CLICKS = 100;
    const MAX_MULTIPLIER = 3;
    const ITEMS_PER_PAGE = 7;
    const SHOP_REFRESH_INTERVAL = 600; // 10 minutes in seconds
    const BASE_XP = 5; // XP gained per click
    const LEVEL_GROWTH_FACTOR = 1.8; // 15% increase per level

    const defaultGameData = {
        count: 0,
        coinsPerClick: 1,
        upgradeLevel: 0,
        rebirths: 0,
        upgradeCost: 10,
        rebirthCost: 1000000,
        currentSkin: 'Skins/SvetlanaSkin.jpg',
        unlockedSkins: ['Skins/SvetlanaSkin.jpg'],
        completedAchievements: [],
        dailyRewardDay: 0,
        lastClaimDate: null,
        clickCombo: 0,
        autoclickDetectEnabled: true,
        totalClicksCount: 0,
        totalCoinsEarned: 0,
        totalUpgradesBought: 0,
        totalRebirthsCompleted: 0,
        autoclickTriggerCount: 0,
        debugMode: false,
        tutorialShown: false,
        level: 1, // Start at level 1
        xp: 0, // Current XP
        xpToNextLevel: 10, // Initial XP required for level 2
        coinsPerSec: 0,
        comboBoost: 1,
        shopLastRefresh: Date.now(),
        theme: 'night',
        lastUpdateTime: Date.now(),
        tempBoosts: {}
    };

    let gameData = loadGameData();

    // Define shopItemsBase after gameData is initialized
    const shopItemsBase = [
        { name: "+1 Coin Per Click", effect: () => gameData.coinsPerClick++, cost: () => Math.floor(50 * Math.pow(1.15, gameData.coinsPerClick)), maxQty: 50, qty: 0 },
        { name: "+1 Coin/sec", effect: () => gameData.coinsPerSec++, cost: () => Math.floor(100 * Math.pow(1.2, gameData.coinsPerSec)), maxQty: 100, qty: 0 },
        { name: "+5 Coins Per Click", effect: () => gameData.coinsPerClick += 5, cost: () => Math.floor(200 * Math.pow(1.25, gameData.coinsPerClick / 5)), maxQty: 20, qty: 0 },
        { name: "+10% Combo Boost", effect: () => gameData.comboBoost += 0.1, cost: () => Math.floor(5000 * Math.pow(1.3, gameData.comboBoost * 10)), maxQty: 10, qty: 0 },
        { name: "Half Upgrade Cost", effect: () => gameData.upgradeCost = Math.max(10, Math.floor(gameData.upgradeCost / 2)), cost: () => gameData.upgradeCost * 5, maxQty: 5, qty: 0 },
        { name: "Instant 100k Coins", effect: () => gameData.count += 100000, cost: () => 75000, maxQty: 3, qty: 0 },
        { name: "Double Coins/sec (5min)", effect: () => activateTempBoost('coinsPerSec', 2, 300), cost: () => 100000, maxQty: 1, qty: 0 },
    ];

    // Initialize shopItems in gameData if not present
    if (!gameData.shopItems || gameData.shopItems.length === 0) {
        gameData.shopItems = shopItemsBase.map(item => ({ ...item }));
    }

    let clickTimes = [];
    let comboTimeout = null;
    let holdTimeout = null;
    let currentSkinPage = 0;
    let currentAchPage = 0;
    let currentShopPage = 0;
    const totalSkinPages = Math.ceil(skins.length / ITEMS_PER_PAGE);
    const totalAchPages = Math.ceil(achievements.length / ITEMS_PER_PAGE);
    const totalShopPages = Math.ceil(shopItemsBase.length / ITEMS_PER_PAGE);
    let clicksPerSecond = 0;

    // Load and Save Functions
    function loadGameData() {
        const savedData = localStorage.getItem('gameData');
        if (savedData) {
            try {
                const loadedData = JSON.parse(atob(savedData));
                updateOfflineProgress(loadedData);
                if (!loadedData.xp) loadedData.xp = 0;
                if (!loadedData.xpToNextLevel) loadedData.xpToNextLevel = calculateXPForLevel(loadedData.level + 1);
                return { ...defaultGameData, ...loadedData };
            } catch (e) {
                console.error("Error loading save data:", e);
                return { ...defaultGameData };
            }
        }
        saveGameData(defaultGameData);
        return { ...defaultGameData };
    }

    function saveGameData(data) {
        data.lastUpdateTime = Date.now();
        try {
            localStorage.setItem('gameData', btoa(JSON.stringify(data)));
        } catch (e) {
            console.error("Error saving game data:", e);
        }
    }

    function updateOfflineProgress(data) {
        const now = Date.now();
        const timeElapsed = Math.floor((now - (data.lastUpdateTime || now)) / 1000);
        if (timeElapsed > 0) {
            data.count += data.coinsPerSec * timeElapsed;
            data.totalCoinsEarned += data.coinsPerSec * timeElapsed;
            if (timeElapsed >= SHOP_REFRESH_INTERVAL) {
                refreshShopItems();
                data.shopLastRefresh = now - (timeElapsed % SHOP_REFRESH_INTERVAL) * 1000;
            }
            updateTempBoosts(timeElapsed);
        }
    }

    function resetGameData() {
        gameData = { ...defaultGameData, shopItems: shopItemsBase.map(item => ({ ...item })) };
        saveGameData(gameData);
        updateUI();
    }

    // XP and Level Functions
    function calculateXPForLevel(level) {
        return Math.floor(BASE_XP * Math.pow(LEVEL_GROWTH_FACTOR, level - 1));
    }

    function checkLevelUp() {
        while (gameData.xp >= gameData.xpToNextLevel) {
            gameData.xp -= gameData.xpToNextLevel;
            gameData.level++;
            gameData.xpToNextLevel = calculateXPForLevel(gameData.level + 1);
        }
    }

    // UI Updates
    function updateUI() {
        elements.mainButton.style.backgroundImage = `url('${gameData.currentSkin}')`;
        elements.upgradeButton.style.backgroundImage = `url('${gameData.currentSkin}')`;
        elements.rebirthButton.style.backgroundImage = `url('${gameData.currentSkin}')`;
        elements.coinIcon.src = gameData.currentSkin;
        elements.clickSound.src = skins.find(s => s.skin === gameData.currentSkin).sound;
        elements.coinCount.textContent = formatNumber(gameData.count);
        elements.upgradeCostLabel.textContent = `Cost: ${formatNumber(gameData.upgradeCost)}`;
        elements.upgradeCountLabel.textContent = `Count: ${gameData.upgradeLevel}`;
        elements.rebirthCostLabel.textContent = `Cost: ${formatNumber(gameData.rebirthCost)}`;
        elements.rebirthCountLabel.textContent = `Count: ${gameData.rebirths} (x${gameData.rebirths + 1})`;
        elements.upgradeButton.disabled = gameData.count < gameData.upgradeCost;
        elements.rebirthButton.disabled = gameData.count < gameData.rebirthCost;
        elements.comboCounter.textContent = `Combo: ${getComboMultiplier()}x`;
        elements.levelDisplay.textContent = `Level: ${gameData.level} (XP: ${formatNumber(gameData.xp)}/${formatNumber(gameData.xpToNextLevel)})`;
        elements.jumpscare.style.backgroundImage = `url('Skins/JumpScare.jpg')`;
        elements.debugToggle.checked = gameData.debugMode;
        elements.debugStats.style.display = gameData.debugMode ? 'block' : 'none';
        document.body.className = gameData.theme + '-theme';
        elements.themeSelect.value = gameData.theme;
        elements.adminAutoclickDetect.checked = gameData.autoclickDetectEnabled;
        updateDebugStats();
        renderSkinPage();
        renderAchievements();
        renderDailyRewards();
        renderShop();
        updateNotifications();
    }

    function formatNumber(num) {
        if (num >= 1e6) return (num / 1e6).toFixed(2) + 'M';
        if (num >= 1e3) return (num / 1e3).toFixed(2) + 'K';
        return num.toString();
    }

    // Initial Setup
    updateUI();
    if (!gameData.tutorialShown) {
        alert("Welcome to SndTagXClicker!\n\n- Click to earn coins and XP.\n- Buy upgrades or rebirths.\n- Unlock skins and achievements.\n- Check the Shop for boosts!");
        gameData.tutorialShown = true;
        saveGameData(gameData);
    }

    // Event Listeners
    elements.clickArea.addEventListener('mousedown', e => {
        e.preventDefault();
        holdTimeout = setTimeout(() => elements.adminPanel.style.display = 'block', 3000);
    });
    elements.clickArea.addEventListener('mouseup', () => clearTimeout(holdTimeout));
    elements.clickArea.addEventListener('touchstart', e => {
        e.preventDefault();
        holdTimeout = setTimeout(() => elements.adminPanel.style.display = 'block', 3000);
    });
    elements.clickArea.addEventListener('touchend', () => clearTimeout(holdTimeout));

    elements.mainButton.addEventListener('click', e => {
        if (detectAutoclicker()) return;
        elements.clickSound.play().catch(e => console.error('Sound error:', e));
        updateCombo();
        const coinsGained = gameData.coinsPerClick * (gameData.rebirths + 1) * getComboMultiplier();
        gameData.count += coinsGained;
        gameData.totalClicksCount++;
        gameData.totalCoinsEarned += coinsGained;
        gameData.xp += BASE_XP; // Gain XP per click
        checkLevelUp(); // Check if enough XP to level up
        createFlyingCoin(e);
        clicksPerSecond++;
        saveGameData(gameData);
        updateUI();
    });

    elements.upgradeButton.addEventListener('click', () => {
        if (gameData.count >= gameData.upgradeCost) {
            gameData.count -= gameData.upgradeCost;
            gameData.coinsPerClick++;
            gameData.upgradeLevel++;
            gameData.totalUpgradesBought++;
            gameData.upgradeCost = Math.floor(10 * Math.pow(gameData.upgradeLevel, 2)) || 10;
            saveGameData(gameData);
            updateUI();
        }
    });

    elements.rebirthButton.addEventListener('click', () => {
        if (gameData.count >= gameData.rebirthCost) {
            gameData.count = 0;
            gameData.coinsPerClick = 1;
            gameData.upgradeLevel = 0;
            gameData.rebirths++;
            gameData.totalRebirthsCompleted++;
            gameData.upgradeCost = 10;
            gameData.rebirthCost = Math.floor(1000000 * Math.pow(2, gameData.rebirths));
            gameData.unlockedSkins = ['Skins/SvetlanaSkin.jpg'];
            gameData.currentSkin = 'Skins/SvetlanaSkin.jpg';
            gameData.clickCombo = 0;
            gameData.coinsPerSec = 0;
            gameData.comboBoost = 1;
            gameData.shopItems = shopItemsBase.map(item => ({ ...item }));
            gameData.level = 1; // Reset to level 1
            gameData.xp = 0; // Reset XP
            gameData.xpToNextLevel = calculateXPForLevel(2); // Reset XP requirement
            saveGameData(gameData);
            updateUI();
        }
    });

    elements.skinPanelToggle.addEventListener('click', togglePanel.bind(null, elements.skinPanel, renderSkinPage));
    elements.achievementsToggle.addEventListener('click', togglePanel.bind(null, elements.achievementsPanel, renderAchievements));
    elements.dailyRewardsToggle.addEventListener('click', togglePanel.bind(null, elements.dailyRewardsPanel, renderDailyRewards));
    elements.settingsToggle.addEventListener('click', togglePanel.bind(null, elements.settingsPanel, () => {}));
    elements.shopToggle.addEventListener('click', togglePanel.bind(null, elements.shopPanel, renderShop));

    elements.prevPage.addEventListener('click', () => { if (currentSkinPage > 0) { currentSkinPage--; renderSkinPage(); } });
    elements.nextPage.addEventListener('click', () => { if (currentSkinPage < totalSkinPages - 1) { currentSkinPage++; renderSkinPage(); } });
    elements.achPrevPage.addEventListener('click', () => { if (currentAchPage > 0) { currentAchPage--; renderAchievements(); } });
    elements.achNextPage.addEventListener('click', () => { if (currentAchPage < totalAchPages - 1) { currentAchPage++; renderAchievements(); } });
    elements.shopPrevPage.addEventListener('click', () => { if (currentShopPage > 0) { currentShopPage--; renderShop(); } });
    elements.shopNextPage.addEventListener('click', () => { if (currentShopPage < totalShopPages - 1) { currentShopPage++; renderShop(); } });

    elements.debugToggle.addEventListener('change', () => {
        gameData.debugMode = elements.debugToggle.checked;
        elements.debugStats.style.display = gameData.debugMode ? 'block' : 'none';
        saveGameData(gameData);
        updateDebugStats();
    });

    elements.themeSelect.addEventListener('change', () => {
        gameData.theme = elements.themeSelect.value;
        saveGameData(gameData);
        updateUI();
    });

    elements.exportSaveButton.addEventListener('click', () => {
        elements.exportSaveText.value = btoa(JSON.stringify(gameData));
    });

    elements.importSaveButton.addEventListener('click', () => {
        try {
            gameData = JSON.parse(atob(elements.importSaveText.value));
            // Ensure shopItems are initialized if missing or corrupted
            if (!gameData.shopItems || gameData.shopItems.length === 0) {
                gameData.shopItems = shopItemsBase.map(item => ({ ...item }));
            }
            saveGameData(gameData);
            updateUI();
        } catch (e) {
            alert("Invalid save code! Resetting to default.");
            resetGameData();
        }
    });

    elements.resetGameButton.addEventListener('click', () => {
        if (confirm("Are you sure you want to reset all progress?")) {
            resetGameData();
        }
    });

    elements.adminCloseButton.addEventListener('click', () => {
        elements.adminPanel.style.display = 'none';
        updateDebugStats();
    });

    // Admin Panel Event Listeners
    elements.setCoins.addEventListener('click', () => {
        gameData.count = parseInt(elements.adminCoins.value) || 0;
        saveGameData(gameData);
        updateUI();
    });

    elements.setCoinsPerClick.addEventListener('click', () => {
        gameData.coinsPerClick = parseInt(elements.adminCoinsPerClick.value) || 1;
        saveGameData(gameData);
        updateUI();
    });

    elements.setUpgrades.addEventListener('click', () => {
        gameData.upgradeLevel = parseInt(elements.adminUpgrades.value) || 0;
        gameData.totalUpgradesBought = gameData.upgradeLevel;
        saveGameData(gameData);
        updateUI();
    });

    elements.setUpgradeCost.addEventListener('click', () => {
        gameData.upgradeCost = parseInt(elements.adminUpgradeCost.value) || 10;
        saveGameData(gameData);
        updateUI();
    });

    elements.setRebirths.addEventListener('click', () => {
        gameData.rebirths = parseInt(elements.adminRebirths.value) || 0;
        gameData.totalRebirthsCompleted = gameData.rebirths;
        saveGameData(gameData);
        updateUI();
    });

    elements.setRebirthCost.addEventListener('click', () => {
        gameData.rebirthCost = parseInt(elements.adminRebirthCost.value) || 1000000;
        saveGameData(gameData);
        updateUI();
    });

    elements.setCombo.addEventListener('click', () => {
        gameData.clickCombo = parseInt(elements.adminCombo.value) || 0;
        saveGameData(gameData);
        updateUI();
    });

    elements.setDailyRewards.addEventListener('click', () => {
        gameData.dailyRewardDay = parseInt(elements.adminDailySet.value) || 0;
        gameData.lastClaimDate = null;
        saveGameData(gameData);
        updateUI();
    });

    elements.setSkins.addEventListener('click', () => {
        const indexes = elements.adminSkins.value.split(',').map(i => parseInt(i.trim()) - 1);
        gameData.unlockedSkins = indexes.map(i => skins[i]?.skin).filter(Boolean);
        if (!gameData.unlockedSkins.includes(gameData.currentSkin)) gameData.currentSkin = gameData.unlockedSkins[0] || 'Skins/SvetlanaSkin.jpg';
        saveGameData(gameData);
        updateUI();
    });

    elements.setAchievements.addEventListener('click', () => {
        const ids = elements.adminAchievements.value.split(',').map(i => parseInt(i.trim()));
        gameData.completedAchievements = ids.filter(id => achievements.some(a => a.id === id));
        saveGameData(gameData);
        updateUI();
    });

    elements.toggleAutoclickDetect.addEventListener('click', () => {
        gameData.autoclickDetectEnabled = elements.adminAutoclickDetect.checked;
        saveGameData(gameData);
        updateUI();
    });

    elements.setClicksPerSec.addEventListener('click', () => {
        clicksPerSecond = parseInt(elements.adminClicksPerSec.value) || 0;
        updateUI();
    });

    elements.setLevel.addEventListener('click', () => {
        gameData.level = parseInt(elements.adminLevel.value) || 1;
        gameData.xp = 0; // Reset XP when setting level manually
        gameData.xpToNextLevel = calculateXPForLevel(gameData.level + 1);
        saveGameData(gameData);
        updateUI();
    });

    elements.setShopRefresh.addEventListener('click', () => {
        gameData.shopLastRefresh = Date.now() - (parseInt(elements.adminShopRefresh.value) || 0) * 1000;
        saveGameData(gameData);
        updateUI();
    });

    elements.setCoinsPerSec.addEventListener('click', () => {
        gameData.coinsPerSec = parseInt(elements.adminCoinsPerSec.value) || 0;
        saveGameData(gameData);
        updateUI();
    });

    elements.setComboBoost.addEventListener('click', () => {
        gameData.comboBoost = parseFloat(elements.adminComboBoost.value) || 1;
        saveGameData(gameData);
        updateUI();
    });

    elements.setTempBoost.addEventListener('click', () => {
        const duration = parseInt(elements.adminTempBoostDuration.value) || 0;
        activateTempBoost('coinsPerSec', 2, duration);
        saveGameData(gameData);
        updateUI();
    });

    elements.setTotalClicks.addEventListener('click', () => {
        gameData.totalClicksCount = parseInt(elements.adminTotalClicks.value) || 0;
        saveGameData(gameData);
        updateUI();
    });

    elements.setTotalCoinsEarned.addEventListener('click', () => {
        gameData.totalCoinsEarned = parseInt(elements.adminTotalCoinsEarned.value) || 0;
        saveGameData(gameData);
        updateUI();
    });

    elements.clearTempBoosts.addEventListener('click', () => {
        gameData.tempBoosts = {};
        saveGameData(gameData);
        updateUI();
    });

    elements.resetShopQuantities.addEventListener('click', () => {
        gameData.shopItems.forEach(item => item.qty = 0);
        saveGameData(gameData);
        updateUI();
    });

    elements.maxShopPurchases.addEventListener('click', () => {
        gameData.shopItems.forEach(item => {
            while (item.qty < item.maxQty) {
                item.effect();
                item.qty++;
            }
        });
        saveGameData(gameData);
        updateUI();
    });

    elements.triggerJumpscare.addEventListener('click', () => {
        triggerJumpscare();
    });

    elements.forceShopRefresh.addEventListener('click', () => {
        refreshShopItems();
        saveGameData(gameData);
        updateUI();
    });

    elements.unlockAllSkins.addEventListener('click', () => {
        gameData.unlockedSkins = skins.map(s => s.skin);
        saveGameData(gameData);
        updateUI();
    });

    elements.completeAllAchievements.addEventListener('click', () => {
        gameData.completedAchievements = achievements.map(a => a.id);
        saveGameData(gameData);
        updateUI();
    });

    elements.resetDailyRewards.addEventListener('click', () => {
        gameData.dailyRewardDay = 0;
        gameData.lastClaimDate = null;
        saveGameData(gameData);
        updateUI();
    });

    document.addEventListener('click', e => {
        if (!elements.skinPanel.contains(e.target) && e.target !== elements.skinPanelToggle) elements.skinPanel.style.display = 'none';
        if (!elements.achievementsPanel.contains(e.target) && e.target !== elements.achievementsToggle) elements.achievementsPanel.style.display = 'none';
        if (!elements.dailyRewardsPanel.contains(e.target) && e.target !== elements.dailyRewardsToggle) elements.dailyRewardsPanel.style.display = 'none';
        if (!elements.settingsPanel.contains(e.target) && e.target !== elements.settingsToggle) elements.settingsPanel.style.display = 'none';
        if (!elements.shopPanel.contains(e.target) && e.target !== elements.shopToggle) elements.shopPanel.style.display = 'none';
        if (!elements.adminPanel.contains(e.target) && e.target !== elements.clickArea) elements.adminPanel.style.display = 'none';
        updateDebugStats();
    });

    // Game Logic
    function updateCombo() {
        gameData.clickCombo = Math.min(gameData.clickCombo + 1, MAX_COMBO_CLICKS);
        clearTimeout(comboTimeout);
        comboTimeout = setTimeout(() => {
            gameData.clickCombo = 0;
            saveGameData(gameData);
            updateUI();
        }, 2000);
    }

    function getComboMultiplier() {
        return Math.min(Math.floor(gameData.clickCombo / (MAX_COMBO_CLICKS / (MAX_MULTIPLIER - 1))) + 1, MAX_MULTIPLIER) * gameData.comboBoost;
    }

    function detectAutoclicker() {
        if (!gameData.autoclickDetectEnabled) return false;
        const now = Date.now();
        clickTimes.push(now);
        if (clickTimes.length > Math.max(CLICK_THRESHOLD, CONSISTENT_THRESHOLD)) clickTimes.shift();
        if (clickTimes.length >= CLICK_THRESHOLD) {
            const timeSpan = clickTimes[clickTimes.length - 1] - clickTimes[clickTimes.length - CLICK_THRESHOLD];
            if (timeSpan < TIME_THRESHOLD && (timeSpan / (CLICK_THRESHOLD - 1)) < MIN_INTERVAL) {
                triggerJumpscare();
                return true;
            }
        }
        if (clickTimes.length >= CONSISTENT_THRESHOLD) {
            const intervals = clickTimes.slice(-CONSISTENT_THRESHOLD).map((t, i, arr) => i > 0 ? t - arr[i - 1] : null).slice(1);
            const avg = intervals.reduce((a, b) => a + b) / intervals.length;
            if (intervals.every(i => Math.abs(i - avg) <= INTERVAL_TOLERANCE)) {
                triggerJumpscare();
                return true;
            }
        }
        return false;
    }

    function triggerJumpscare() {
        elements.jumpscare.style.display = 'block';
        elements.mainButton.disabled = true;
        gameData.autoclickTriggerCount++;
        saveGameData(gameData);
    }

    function createFlyingCoin(e) {
        const coin = document.createElement('img');
        coin.src = gameData.currentSkin;
        coin.className = 'flying-coin';
        const rect = elements.mainButton.getBoundingClientRect();
        coin.style.left = (e.clientX - rect.left - 16) + 'px';
        coin.style.top = (e.clientY - rect.top - 16) + 'px';
        document.body.appendChild(coin);
        setTimeout(() => coin.remove(), 1000);
    }

    function togglePanel(panel, renderFn) {
        const isVisible = panel.style.display === 'block';
        [elements.skinPanel, elements.achievementsPanel, elements.dailyRewardsPanel, elements.settingsPanel, elements.shopPanel, elements.adminPanel].forEach(p => p.style.display = 'none');
        panel.style.display = isVisible ? 'none' : 'block';
        if (!isVisible) renderFn();
    }

    function updateNotifications() {
        elements.skinNotification.style.display = skins.some(s => !gameData.unlockedSkins.includes(s.skin) && gameData.count >= s.cost) ? 'block' : 'none';
        elements.achievementsNotification.style.display = achievements.some(a => !gameData.completedAchievements.includes(a.id) && isAchievable(a)) ? 'block' : 'none';
        const canClaimDaily = !gameData.lastClaimDate || gameData.lastClaimDate !== new Date().toDateString();
        elements.dailyNotification.style.display = canClaimDaily && gameData.dailyRewardDay < dailyRewards.length ? 'block' : 'none';
        elements.shopNotification.style.display = gameData.shopItems.some(i => i.qty < i.maxQty && gameData.count >= i.cost()) ? 'block' : 'none';
    }

    function isAchievable(ach) {
        return (ach.type === "coins" && gameData.count >= ach.goal) ||
               (ach.type === "upgrades" && gameData.upgradeLevel >= ach.goal) ||
               (ach.type === "rebirths" && gameData.rebirths >= ach.goal) ||
               (ach.type === "combo" && getComboMultiplier() >= ach.goal) ||
               (ach.type === "skin" && gameData.unlockedSkins.includes(ach.goal));
    }

    // Rendering Functions
    function renderSkinPage() {
        elements.skinPages.innerHTML = '';
        const start = currentSkinPage * ITEMS_PER_PAGE;
        const end = Math.min(start + ITEMS_PER_PAGE, skins.length);
        skins.slice(start, end).forEach((skin, i) => {
            const option = document.createElement('div');
            option.className = 'skin-option';
            option.innerHTML = `<span class="id-label">${start + i + 1}</span><img src="${skin.skin}" alt="Skin"><span>${skin.name}</span>`;
            if (!gameData.unlockedSkins.includes(skin.skin)) {
                if (gameData.count >= skin.cost) {
                    option.classList.add('buyable');
                    option.addEventListener('click', () => {
                        gameData.count -= skin.cost;
                        gameData.unlockedSkins.push(skin.skin);
                        gameData.currentSkin = skin.skin;
                        saveGameData(gameData);
                        updateUI();
                    });
                } else {
                    option.classList.add('locked');
                }
            } else {
                option.addEventListener('click', () => {
                    gameData.currentSkin = skin.skin;
                    saveGameData(gameData);
                    updateUI();
                    elements.skinPanel.style.display = 'none';
                });
            }
            elements.skinPages.appendChild(option);
        });
        elements.pageIndicator.textContent = `Page ${currentSkinPage + 1} of ${totalSkinPages}`;
        elements.prevPage.disabled = currentSkinPage === 0;
        elements.nextPage.disabled = currentSkinPage === totalSkinPages - 1;
    }

    function renderAchievements() {
        elements.achievementPages.innerHTML = '';
        const start = currentAchPage * ITEMS_PER_PAGE;
        const end = Math.min(start + ITEMS_PER_PAGE, achievements.length);
        achievements.slice(start, end).forEach(ach => {
            const option = document.createElement('div');
            option.className = 'achievement-option';
            option.innerHTML = `<span class="id-label">${ach.id}</span><img src="${gameData.currentSkin}" alt="Ach"><span>${ach.name} (${formatNumber(ach.reward)})<br>${ach.desc}</span>`;
            if (gameData.completedAchievements.includes(ach.id)) {
                option.classList.add('completed');
            } else if (isAchievable(ach)) {
                option.classList.add('claimable');
                option.addEventListener('click', () => {
                    gameData.completedAchievements.push(ach.id);
                    gameData.count += ach.reward;
                    gameData.totalCoinsEarned += ach.reward;
                    saveGameData(gameData);
                    updateUI();
                });
            }
            elements.achievementPages.appendChild(option);
        });
        elements.achPageIndicator.textContent = `Page ${currentAchPage + 1} of ${totalAchPages}`;
        elements.achPrevPage.disabled = currentAchPage === 0;
        elements.achNextPage.disabled = currentAchPage === totalAchPages - 1;
    }

    function renderDailyRewards() {
        elements.dailyRewardsPanel.innerHTML = '';
        const today = new Date().toDateString();
        const canClaim = !gameData.lastClaimDate || gameData.lastClaimDate !== today;
        dailyRewards.forEach((reward, i) => {
            const option = document.createElement('div');
            option.className = 'daily-reward-option';
            option.innerHTML = `<span>Day ${reward.day}: ${formatNumber(reward.reward)} coins</span>`;
            if (i < gameData.dailyRewardDay) {
                option.classList.add('claimed');
            } else if (i === gameData.dailyRewardDay && canClaim) {
                option.classList.add('claimable');
                option.addEventListener('click', () => {
                    gameData.count += reward.reward;
                    gameData.totalCoinsEarned += reward.reward;
                    gameData.dailyRewardDay++;
                    gameData.lastClaimDate = today;
                    if (gameData.dailyRewardDay >= dailyRewards.length) gameData.dailyRewardDay = 0;
                    saveGameData(gameData);
                    updateUI();
                });
            } else {
                option.classList.add('locked');
            }
            elements.dailyRewardsPanel.appendChild(option);
        });
    }

    function refreshShopItems() {
        gameData.shopItems = shopItemsBase.map(item => ({ ...item, qty: 0 }));
        gameData.shopLastRefresh = Date.now();
    }

    function renderShop() {
        const now = Date.now();
        const timeSinceRefresh = Math.floor((now - gameData.shopLastRefresh) / 1000);
        if (timeSinceRefresh >= SHOP_REFRESH_INTERVAL) {
            refreshShopItems();
        }
        const timeLeft = Math.max(0, SHOP_REFRESH_INTERVAL - timeSinceRefresh);
        elements.shopTimer.textContent = `Refresh in: ${Math.floor(timeLeft / 60)}:${String(timeLeft % 60).padStart(2, '0')}`;

        elements.shopPages.innerHTML = '';
        const start = currentShopPage * ITEMS_PER_PAGE;
        const end = Math.min(start + ITEMS_PER_PAGE, gameData.shopItems.length);
        gameData.shopItems.slice(start, end).forEach((item, i) => {
            const option = document.createElement('div');
            option.className = 'shop-option';
            const remainingQty = item.maxQty - item.qty;
            option.innerHTML = `<span class="id-label">${start + i + 1}</span><img src="${gameData.currentSkin}" alt="Shop"><span>${item.name} (${formatNumber(item.cost())})</span><span class="quantity">Qty: ${remainingQty}/${item.maxQty}</span>`;
            if (remainingQty > 0 && gameData.count >= item.cost()) {
                option.classList.add('buyable');
                option.addEventListener('click', () => {
                    gameData.count -= item.cost();
                    item.effect();
                    item.qty++;
                    saveGameData(gameData);
                    updateUI();
                });
            } else if (remainingQty <= 0) {
                option.classList.add('sold');
            }
            elements.shopPages.appendChild(option);
        });
        elements.shopPageIndicator.textContent = `Page ${currentShopPage + 1} of ${totalShopPages}`;
        elements.shopPrevPage.disabled = currentShopPage === 0;
        elements.shopNextPage.disabled = currentShopPage === totalShopPages - 1;
    }

    function activateTempBoost(type, multiplier, duration) {
        gameData.tempBoosts[type] = { multiplier, endTime: Date.now() + duration * 1000 };
        saveGameData(gameData);
    }

    function updateTempBoosts(timeElapsed) {
        const now = Date.now();
        for (const [type, boost] of Object.entries(gameData.tempBoosts)) {
            if (now >= boost.endTime) {
                delete gameData.tempBoosts[type];
            }
        }
    }

    function getEffectiveCoinsPerSec() {
        let multiplier = 1;
        if (gameData.tempBoosts.coinsPerSec) {
            multiplier = gameData.tempBoosts.coinsPerSec.multiplier;
        }
        return gameData.coinsPerSec * multiplier;
    }

    function updateDebugStats() {
        if (gameData.debugMode) {
            elements.debugStats.innerHTML = `
                Clicks/sec: ${clicksPerSecond}<br>
                Total Clicks: ${gameData.totalClicksCount}<br>
                Coins Earned: ${formatNumber(gameData.totalCoinsEarned)}<br>
                Current Coins: ${formatNumber(gameData.count)}<br>
                Coins Per Click: ${gameData.coinsPerClick}<br>
                Upgrades Bought: ${gameData.totalUpgradesBought}<br>
                Upgrade Level: ${gameData.upgradeLevel}<br>
                Upgrade Cost: ${formatNumber(gameData.upgradeCost)}<br>
                Rebirths Completed: ${gameData.totalRebirthsCompleted}<br>
                Rebirth Cost: ${formatNumber(gameData.rebirthCost)}<br>
                Combo Multiplier: ${getComboMultiplier().toFixed(2)}x<br>
                Click Combo: ${gameData.clickCombo}<br>
                Coins/sec: ${getEffectiveCoinsPerSec()}<br>
                Combo Boost: ${gameData.comboBoost.toFixed(2)}x<br>
                Autoclick Triggers: ${gameData.autoclickTriggerCount}<br>
                Autoclick Detect: ${gameData.autoclickDetectEnabled ? 'On' : 'Off'}<br>
                Skins Unlocked: ${gameData.unlockedSkins.length}<br>
                Current Skin: ${skins.find(s => s.skin === gameData.currentSkin).name.split(' ')[0]}<br>
                Achievements Completed: ${gameData.completedAchievements.length}<br>
                Daily Reward Day: ${gameData.dailyRewardDay}<br>
                Last Claim Date: ${gameData.lastClaimDate || 'None'}<br>
                Admin Panel: ${elements.adminPanel.style.display === 'block' ? 'Visible' : 'Hidden'}<br>
                Player Level: ${gameData.level}<br>
                XP: ${formatNumber(gameData.xp)}/${formatNumber(gameData.xpToNextLevel)}<br>
                Shop Refresh: ${Math.max(0, SHOP_REFRESH_INTERVAL - Math.floor((Date.now() - gameData.shopLastRefresh) / 1000))}s
            `;
        }
    }

    // Game Loop
    setInterval(() => {
        const coinsPerSec = getEffectiveCoinsPerSec();
        gameData.count += coinsPerSec;
        gameData.totalCoinsEarned += coinsPerSec;
        updateTempBoosts(1);
        saveGameData(gameData);
        updateUI();
        if (gameData.debugMode) {
            updateDebugStats();
            clicksPerSecond = 0;
        }
    }, 1000);
});
