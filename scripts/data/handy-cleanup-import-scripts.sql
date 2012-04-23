SELECT * INTO tbl_workforce_bak FROM tbl_workforce;
SELECT * INTO tbl_fte_multipliers_bak FROM tbl_fte_multipliers;
SELECT * INTO tbl_potential_work_bak FROM tbl_potential_work;
SELECT * INTO tbl_selection_rates_bak FROM tbl_selection_rates;

DELETE FROM tbl_workforce;
DELETE FROM tbl_fte_multipliers WHERE keyvalue in (1, 13, 19);
DELETE FROM tbl_potential_work WHERE keyvalue in (1, 13, 19);
DELETE FROM tbl_selection_rates WHERE keyvalue in (1, 13, 19);

UPDATE tbl_fte_multipliers SET series = concat('0', series) WHERE char_length(series) = 3;
UPDATE tbl_fte_multipliers SET series = concat('00', series) WHERE char_length(series) = 2;
UPDATE tbl_fte_multipliers SET series = concat('000', series) WHERE char_length(series) = 1;


Healthcare analytics | Government cloud analysis | Data mining | Ikanow | Infinit.e