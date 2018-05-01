//
//  ViewController.swift
//  HelloSwift
//
//  Created by Marcus Crane on 28/04/18.
//  Copyright © 2018 spondylite. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var helloButton: UIButton!
    
    @IBAction func showAlert(_ sender: Any) {
        let alert = UIAlertController(title: "Hello!", message: "Hello, world!", preferredStyle: UIAlertControllerStyle.alert)
        alert.addAction(UIAlertAction(title: "Close", style: UIAlertActionStyle.default, handler: nil))
        self.present(alert, animated: true, completion: nil)
        self.helloButton.setTitle("Test!", for: UIControlState.normal)
    }
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

