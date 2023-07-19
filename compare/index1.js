public static function getLandingPageInfo($cat_id){
    $cacheService = new CacheServiceNews("Category", "getLandingPageInfo", $cat_id);
    $key = $cacheService->createKey();
    $cache = Yii::app()->cache->get($key);

    if ($cache == false) {
        $connect =Yii::app()->db;
        $sql="SELECT * FROM category_landingpage WHERE cat_id=".intval($cat_id);
        $command=$connect->createCommand($sql);
        $row= $command->queryRow();
        $data = array('row' => $row, 'time' => time());
        Yii::app()->cache->set($key, $data, ConstantsUtil::TIME_CACHE_300);
    } else {
        $row = isset($cache['row']) ? $cache['row'] : array();
    }

    return $row;
}


ID | cat_id | sub_cat_id | display_type | updated_at | created_at | cron_cache | cache_type ( category_page )
    