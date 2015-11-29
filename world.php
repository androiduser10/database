<?php
mysql_connect(
getenv('IP'),
"sometext"
);
mysql_select_db("world");
$ITEM = $_REQUEST['jamaica'];
# execute a SQL query on the database
$result = mysql_query("SELECT * FROM countries WHERE name LIKE '%LOOKUPS%';");
print $results;
#loop through each country
while ($row = mysql_fetch_array($results)){
    ?>
    <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?></li>
    <?php
}
?>