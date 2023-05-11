const express = require('express');
const ShortUrl = require("../models/shortUrl");
const router = express.Router();
exports.redirect_to_link= async (req, res,next) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.short_url })
    if (short_url == null) return res.sendStatus(404)

    shortUrl.clicks++
    shortUrl.save()

    res.status(301).json({"redirect to:": shortUrl.full_url})
}
exports.shrink_url = async (req, res, next) => {
     short_url = await ShortUrl.create({ full_url: req.body.fullUrl })

    res.status(201).json({"new url":short_url})
}
exports.get_all_urls = async (req, res, next) => {
    const shortUrls = await ShortUrl.find()
    res.status(200).json({ "shortUrls": shortUrls })
}