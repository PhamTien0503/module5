import {Component, OnInit} from '@angular/core';
import {Contract} from "../../../model/contract/contract";
import {ContractService} from "../../service/contract.service";

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  constructor(private contractService: ContractService) {
  }

  contracts: Contract[] = [];
  p = 0;

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.contracts = this.contractService.getAll();
  }
}
